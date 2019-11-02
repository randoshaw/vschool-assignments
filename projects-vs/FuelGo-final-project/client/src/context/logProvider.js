import React, { createContext, useState } from 'react'
import Axios from "axios"

const authAxios = Axios.create();
authAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

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

    const getLogs = (carId) => {
        console.log("getting logs");
        authAxios.get(`/api/carLog/${carId}`).then((res) => {
            setLogs(res.data)
        })
    }

    
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
