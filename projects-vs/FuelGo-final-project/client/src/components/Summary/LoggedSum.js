import React, { useContext, useEffect } from "react";
import { carInfoContext } from "../../context/carInfoProvider";
import { logContext } from "../../context/logProvider";
import LogCard from "./LogCard";
import "./loggedSum.css";
import Reset from "./Reset";
import Totals from "./Totals";

export default props => {
    const {
        carInfo: { make, model, carId, year, imgUrl }
    } = useContext(carInfoContext);
    const { logs, getLogs, deleteAll } = useContext(logContext);

    useEffect(() => {
        getLogs(carId);
    }, []);

    const sortByDate = (logs) => {
        return logs.sort((a,b)=>{
            // console.log(a)
            return parseInt(a.created.replace(/-/g,"")) - parseInt(b.created.replace(/-/g,""))
        })
    }
    
    sortByDate(logs)

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
                        <img
                            src={imgUrl}
                            alt={`${make} ${model}`}
                            width="275px"
                        />
                    </div>
                    <Totals />
                </div>
                <hr />
                <h2>Logged Summaries</h2>
                <div className="logs-container">
                    <LogCard logs={logs} push={props.history.push} />
                </div>
                <Reset carId={carId} action={deleteAll} />
            </div>
        </>
    );
};
