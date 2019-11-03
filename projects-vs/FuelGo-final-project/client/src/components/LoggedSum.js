import React, { useEffect, useContext, useState } from 'react'
import { Button } from 'primereact/button'
// import Axios from 'axios'
import { carInfoContext } from "../context/carInfoProvider"
import { logContext } from "../context/logProvider"
import { UserContext } from "../context/UserProvider"


const carInfo={
    "width":"80vw",
    "border":"2px solid black"
}

const totalsStyle={
    "width":"60vw",
    "border":"2px solid black"
}

const loggedCars = {
    "width":"40vw",
    "border":"1px solid black"
}

// const authAxios = Axios.create();
// authAxios.interceptors.request.use(config => {
//     const token = localStorage.getItem ("token")
//     config.headers.Authorization = `Bearer ${token}`
//     return config;
// })

const MappedLogs = (props) => {
    const { setCarIndex } = useContext(logContext)
    return props.logs.map((log,index)=>{
        let date = new Date(log.created)
        
        const loadEntry = (carIndex) => {
            setCarIndex(carIndex)
            props.push(`/car/logEntry/edit`)
        }

        return (
            
            <div style ={loggedCars} key={index}>
            <ul>
                <li>{date.getMonth()+1}/{date.getDate()+1}/{date.getFullYear()}</li>
                <li>Purchase Amount: ${log.price}</li>
                <li>Gallons: {log.gallons}</li>
                <li>Odometer: {log.odometer}</li>
                {log.tankFull && <li>Tank Selected as Filled</li>}
                {log.notes && <li> Logged Notes: {log.notes} </li>}
            </ul>
            <Button 
            label="Edit"
            onClick= {()=>loadEntry(index)}
            className="p-button-raised p-button-warning" />
        </div>
        )
    })
}

export default (props) => {

    const { authAxios } = useContext(UserContext)
    
    const {carInfo:{make, model, carId, year, imgUrl}} = useContext(carInfoContext)
    const { logs, getLogs } = useContext(logContext)
    const [totals, setTotals] = useState({
        amountSpent: "loading",
        milesTravelled: "loading",
        odometer: "loading"
    })
    useEffect(() => {
        authAxios.get(`/api/totals/${carId}`).then(res=>{
            setTotals(res.data)
            getLogs(carId)
        })
    },[])
    
    
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


        <div style ={totalsStyle}>
            <h3>Totals</h3>
            <ul>
                <li>${totals.amountSpent} Spent on Gas</li>
                <li>{totals.milesTravelled} Miles Traveled</li>
                <li>Current Odometer: {totals.odometer} </li>
            </ul>
        </div>


                <MappedLogs logs={logs} push={props.history.push}/>


       </div>
    )
}
