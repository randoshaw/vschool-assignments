import React, { useEffect, createContext, useState, useContext } from 'react'
import Axios from "axios"
import { UserContext } from "../context/UserProvider"

const authAxios = Axios.create();
authAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export const carInfoContext = createContext()

export default (props) => {

    const initState = {
        make: "",
        model: "",
        odometer: "",
        year: "",
        imgUrl: "",
        carId: ""
    };

    const [state, setState] = useState(initState)
    // const { authAxios } = useContext(UserContext)


    useEffect(() => {
        authAxios
            .get("/api/carInfo/user").then(res => {
            //console.log("GET", res.data[0]);
            setState({
                make: res.data[0].make || "",
                model: res.data[0].model || "",
                year: res.data[0].year || "",
                odometer: res.data[0].odometer || "",
                imgUrl: res.data[0].imgUrl || "",
                carId: res.data[0]._id || ""
            });
        });
    }, []);

    const handleChange = e => {
        const { value, name } = e.target;
        setState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <carInfoContext.Provider value = {{carInfo: state, handleChange,setCarInfo: setState}}>
            {props.children} 
        </carInfoContext.Provider>
    )
}