import React, {useEffect, useContext, useState} from 'react'
import {Button} from 'primereact/button'
import Axios from 'axios'
import { carInfoContext } from "../context/carInfoProvider"
import { CLIENT_RENEG_LIMIT } from 'tls'


const carInfo={
    "width":"80vw",
    "border":"2px solid black"
}

const totals={
    "width":"60vw",
    "border":"2px solid black"
}

const loggedCars = {
    "width":"40vw",
    "border":"1px solid black"
}

const authAxios = Axios.create();
authAxios.interceptors.request.use(config => {
    const token = localStorage.getItem ("token")
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

const MappedLogs = (props) => {
    return props.logs.map(log=>{
        let date = new Date(log.created)
        
        return (
            
            <div style ={loggedCars}>
            <ul>
                <li>Date: {date.getMonth()+1} - {date.getDate()} - {date.getFullYear()}</li>
                <li>Purchase Amount: ${log.price}</li>
                <li>Gallons: {log.gallons}</li>
                <li>Odometer: {log.odometer}</li>
            </ul>
            <Button label="Edit" className="p-button-raised p-button-warning" />
        </div>
        )
    })
}


// logs.map(log => {
//     console.log("LOG",log);
//     return <div key={log.carId}>{log}</div>
// })


export default (params) => {
    const {carInfo:{make, model, carId, year, imgUrl}} = useContext(carInfoContext)

    const [logs, setLogs] = useState([])

    useEffect(() => {
        authAxios.get(`/api/carLog/${carId}`).then((res) => {
            setLogs(res.data)
            console.log(res.data);
        })
    }, [])   

    return (
        <div className="flex-col">
        <div style={carInfo}>
        <h3>Car Information</h3>
        <ul>
            <li>Make: {make}</li>
            <li>Model: {model}</li>
            <li>Year: {year}</li>
        </ul>
        <img src={imgUrl} alt= {`${make} ${model}`} width="275px"/>
        </div>


        <div style ={totals}>
            <h3>Totals</h3>
            <ul>
                <li>Amount Spent on Gas: {"$35.24"} </li>
                <li>Miles Traveled: {"352"}</li>
                <li>Odometer: {"1,432"} </li>
            </ul>
        </div>


                <MappedLogs logs={logs}/>


       </div>
    )
}
