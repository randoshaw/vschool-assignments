import React from 'react'

const Day = (props) => {

    return (
        <div className='weekly'>
            <p>day: {props.dayNum}</p>
            <p>icon: {props.dayData.icon}</p>
            <p>day summary: {props.dayData.summary}</p>
            <p>high temp: {props.dayData.temperatureHigh}</p>
            <p>low temp: {props.dayData.temperatureLow}</p>
        </div>
    )
}

export default Day