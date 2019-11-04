import React, { createContext, useState, useContext } from 'react'
import { UserContext } from "../context/UserProvider"

export const logContext = createContext()

export default (props) => {
    const initialState = [{
        created: new Date(),
        odometer: "",
        gallons: "",
        price: "",
        tankFull: false,
        notes: "",
        car: ""
    }]

    const [logs, setLogs] = useState( initialState )
    const [carIndex, setCarIndex] = useState(0)
    const { authAxios } = useContext(UserContext)

    const getLogs = (carId) => {
        authAxios.get(`/api/carLog/${carId}`)
        .then((res) => {
            // const dated = res.data.map(log => {
            //     return {...log,created:(new Date(log.created))}
            // })
        if(res.data.length===0){
            setLogs(initialState)
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
