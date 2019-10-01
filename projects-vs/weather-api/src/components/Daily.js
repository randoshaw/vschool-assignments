import React from 'react';

const Daily = (props) => {

  // const handleClick =() => {
  //   props.saveToFav()
  // }
    
      return (
        
        <div className="daily-page">
          <h2>Daily Forecast for {props.dailyData.city} {props.dailyData.state}</h2>
          <p>Currently: {props.dailyData.shortSummary}</p>
          <p>Summary: {props.dailyData.summary}</p>
          <p>Current Temp: {props.dailyData.currentTemp}</p>
          <p>High Temp: {props.dailyData.highTemp}</p>
          <p>Low Temp: {props.dailyData.lowTemp}</p>
         {props.dailyData.city && <button onClick={props.saveToFav}>Save to Favorites</button>}

        </div>
      );
}

export default Daily