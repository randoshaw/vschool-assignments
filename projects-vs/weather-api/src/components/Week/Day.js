import React from 'react'

const Day = (props) => {

    const d = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 const weeklyDays = days[d.getDay()];
 console.log('weeklyDAYS',weeklyDays)

    return (
        <div className='weekly'>
            <p>day: {props.dayNum}</p>
            <p>icon: {props.dayData.icon}</p>
            <p>day summary: {props.dayData.summary}</p>
            <p>high temp: {props.dayData.temperatureHigh}°</p>
            <p>low temp: {props.dayData.temperatureLow}°</p>
        </div>
    )
}

export default Day