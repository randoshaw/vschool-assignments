import React, { createContext, useState, useContext } from 'react'
import { UserContext } from "../context/UserProvider"
// import Axios from "axios"

// const authAxios = Axios.create();
// authAxios.interceptors.request.use(config => {
//     const token = localStorage.getItem("token");
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
// });

export const logContext = createContext()

export default (props) => {
    const [logs, setLogs] = useState( [{
        created: "",
        odometer: "",
        gallons: "",
        price: "",
        tankFull: false,
        notes: "",
        car: ""
    }])
    const [carIndex, setCarIndex] = useState(0)
    const { authAxios } = useContext(UserContext)

    const getLogs = (carId) => {
        console.log("getting logs");
        authAxios.get(`/api/carLog/${carId}`)
        .then((res) => {
            const dated = res.data.map(log => {
                return {...log,created:(new Date(log.created))}
            })
            console.log(dated)
            setLogs(dated)
    })}

    
    return (
        <logContext.Provider value={{
            logs,
            getLogs,
            setLogs,
            setCarIndex,
            carIndex
        }}>
            {props.children}
        </logContext.Provider>
    )
}
