import React, {useContext} from 'react'
import { Button } from 'primereact/button';
import { logContext } from "../../context/logProvider";
import { Link } from "react-router-dom";
import ViewNotes from "./viewNotes"

const Notes = (props) => {
    return (
        <> 
            Logged Notes: {
               props.log.notes.slice(0, 10)
            } <ViewNotes notes={props.log.notes}/> 
        </>
    )
}


export default (props) => {
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
                        
                        <div style={{textAlign:"left"}}> 
                            {
                                log.notes 
                                    ? <Notes log={log}/>
                                    : <p> </p> 
                            }
                            </div> 
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
