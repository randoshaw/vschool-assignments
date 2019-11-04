import React, { useEffect, useContext, useState } from 'react'
import { Button } from 'primereact/button'
import {Dialog} from 'primereact/dialog';
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
    const [ confirmation, setConfirmation ] = useState({visible: false})
    const { authAxios } = useContext(UserContext)
    
    const {carInfo:{make, model, carId, year, imgUrl}} = useContext(carInfoContext)
    const { logs, getLogs, deleteAll } = useContext(logContext)

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
    const showConfirmation = (e) => {
        setConfirmation({visible: true})
    }
    const hideConfirmation = (e) => {
        setConfirmation({visible: false})
    }
    const handleDeleteAll = (e) => {
        deleteAll(carId)
        hideConfirmation()
    }
    
    
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

            <Dialog header="Clear All Logs?" footer={(
    <div>
        <Button label="Yes - Delete Now" icon="pi pi-check" onClick={handleDeleteAll} className="p-button-danger"/>
        <Button label="No - Cancel" icon="pi pi-times" onClick={hideConfirmation} />
    </div>
)} visible={confirmation.visible} style={{width: '50vw'}} modal={true} onHide={hideConfirmation}>
                Are you sure that you want to clear all logs?
            </Dialog>

            <Button label="Reset Logs" icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={showConfirmation} />


       </div>
       </>
    )
}
