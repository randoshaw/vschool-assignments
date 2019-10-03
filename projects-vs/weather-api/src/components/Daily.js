import React from 'react'

const Daily = props => {
  console.log('Daily props', props)
  return (
    <div>
      {props.myCity !== '' ? (
        <div className="daily-page">
          <h2>
            Daily Forecast for {props.dailyData.city} {props.dailyData.state}
          </h2>
          <p>
        {/* {props.dayData.icon} */}
        <img
          className="icons"
          alt=""
          src={`https://cdn.jsdelivr.net/gh/jclarke0000/MMM-DarkSkyForecast/icons/4c/${props.dailyData.icon}.svg`}
        />
      </p>
          <p>Currently: {props.dailyData.shortSummary}</p>
          <p>Summary: {props.dailyData.summary}</p>
          <p>Current Temp: {props.dailyData.currentTemp}°</p>
          <p>High Temp: {props.dailyData.highTemp}°</p>
          <p>Low Temp: {props.dailyData.lowTemp}°</p>
          {props.dailyData.city && (
            <button onClick={()=> props.saveToFav({summary: props.dailyData.summary})}>Save to Favorites</button>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default Daily
