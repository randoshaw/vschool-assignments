import React from "react";

const Day = props => {
  //     const d = new Date();
  // const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  // const monday = days[1]
  //  const weeklyDays = days[d.getDay()];
  //  console.log('weeklyDAYS',weeklyDays)

  return (
    <div className="weekly">
      <p>day: {new Date(props.dayData.time * 1000).toLocaleDateString()}</p>
      <p>
        {props.dayData.icon}
        <img
          height="50"
          src={`https://cdn.jsdelivr.net/gh/jclarke0000/MMM-DarkSkyForecast/icons/4c/${props.dayData.icon}.svg`}
        />
      </p>
      <p>day summary: {props.dayData.summary}</p>
      <p>high temp: {props.dayData.temperatureHigh}°</p>
      <p>low temp: {props.dayData.temperatureLow}°</p>
    </div>
  );
};

export default Day;
