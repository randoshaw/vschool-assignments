import React from 'react'

const Day = props => {
  console.log('Day props', props)
  return (
    <div className="weekly">
      <p>{new Date(props.dayData.time * 1000).toLocaleDateString()}</p>
      <p>
        {/* {props.dayData.icon} */}
        <img
          // className="icons"
          alt=""
          src={`https://cdn.jsdelivr.net/gh/jclarke0000/MMM-DarkSkyForecast/icons/4c/${props.dayData.icon}.svg`}
        />
      </p>
      <p>Daily summary: {props.dayData.summary}</p>
      <p>High temperature: {props.dayData.temperatureHigh}°</p>
      <p>Low temperature: {props.dayData.temperatureLow}°</p>
    </div>
  )
}

export default Day
