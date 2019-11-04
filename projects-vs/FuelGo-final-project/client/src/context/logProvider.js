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
        created: new Date(),
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
            console.log("res.data",res.data)
            console.log("carId",carId)
            console.log("logs length", logs.length)
        if(res.data.length===0){
            console.log("no logs, setting default")
            setLogs([
                                {
                                    created: new Date(),
                                    odometer: "",
                                    gallons: "",
                                    price: "",
                                    tankFull: false,
                                    notes: "",
                                    car: ""
                                }
                            ])
        }
            if(res.data.length>0){
                setLogs(res.data)
            }

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
