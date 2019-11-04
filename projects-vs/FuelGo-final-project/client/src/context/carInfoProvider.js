import React, { createContext, useState, useContext } from 'react'
import { UserContext } from "../context/UserProvider"

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

    const [ state, setState ] = useState(initState)
    const [ hasCar, setHasCar ] = useState(false)
    const { authAxios } = useContext(UserContext)

    const getCar = () => {
        authAxios
            .get("/api/carInfo/user").then(res => {
            console.log("GET", res.data[0]);
            if(res.data.length>0){
                setHasCar(true)
                setState({
                    make: res.data[0].make || "",
                    model: res.data[0].model || "",
                    year: res.data[0].year || "",
                    odometer: res.data[0].odometer || "",
                    imgUrl: res.data[0].imgUrl || "",
                    carId: res.data[0]._id || ""
                });                
            }
        });
    }

    const handleChange = e => {
        const { value, name } = e.target;
        setState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <carInfoContext.Provider value = {
            {carInfo: state, 
            handleChange,
            hasCar,
            setHasCar,
            getCar,
            carId: state.carId,
            setCarInfo: setState}}>
            {props.children} 
        </carInfoContext.Provider>
    )
}