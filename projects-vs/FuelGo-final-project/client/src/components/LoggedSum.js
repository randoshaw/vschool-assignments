import React, { useEffect, useContext, useState } from 'react'
import { Button } from 'primereact/button'
// import Axios from 'axios'
import { carInfoContext } from "../context/carInfoProvider"
import { logContext } from "../context/logProvider"
import { UserContext } from "../context/UserProvider"
import "./styles/loggedSum.css"

const MappedLogs = (props) => {
    const { setCarIndex } = useContext(logContext)
    return props.logs.map((log,index)=>{
        let date = new Date(log.created)
        
        const loadEntry = (carIndex) => {
            setCarIndex(carIndex)
            props.push(`/car/logEntry/edit`)
        }

        return (
            <div className="logged-card" key={index}>
                    <div className="item-header">{date.getMonth()+1}/{date.getDate()+1}/{date.getFullYear()}
                    <div style={{fontSize:"120%"}}>${log.price}</div>
                    
                    </div>
                <div className="log-content">
                    <div style={{margin:"6px 30px", width: 150}}>
                        <div style={{textAlign:"left"}}>Gallons: {log.gallons}</div>
                        <div style={{textAlign:"left"}}>Odometer: {log.odometer}</div>
                        
                        <div style={{textAlign:"left"}}> {log.notes ? `Logged Notes: ${log.notes}` 
                        : <p> </p> }</div>
                    </div>
                    <div className="log-btn" >
                    <div style={{visibility: log.tankFull ? "unset" : "hidden"}}>Tank Filled</div>

                        <Button 
                            label="Edit"
                            onClick= {()=>loadEntry(index)}
                            className="p-button-raised p-button-warning" />
                    </div>
                </div>
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
        <>
        <div className="flex-col">
            <div className="summary-container">
                <div className="car-info-card">
                    <div className="item-header">Car Information</div>
                        <div className="car-info">
                            <div>{year}</div>
                            <div>{make}</div>
                            <div>{model}</div>
                        </div>
                    <img src={imgUrl} alt= {`${make} ${model}`} width="275px"/>
                </div>
                <div className ="totals">
                    <div className="item-header">Totals</div>
                    <div>
                        <div>${totals.amountSpent} Spent on Gas</div>
                        <div>{totals.milesTravelled} Miles Traveled</div>
                        <div>Current Odometer: {totals.odometer} </div>
                    </div>
                </div>
            </div>
            <div className="logs-container">
                <MappedLogs logs={logs} push={props.history.push}/>
            </div>    

       </div>
       </>
    )
}
