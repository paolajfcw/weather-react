import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function ForecastDisplay(props) {
  function displayHours() {
    let date = new Date(props.info.dt * 1000);
    let hour = date.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    return `${hour}:00`;
  }

  return (
    <div className="col-2 ForecastDisplay">
      <h4>{displayHours()}</h4>
      <WeatherIcon iconCode={props.info.weather[0].icon} />
      <div>
        <strong>{Math.round(props.info.main.temp_max)}° </strong>
        <span>{Math.round(props.info.main.temp_min)}°</span>
      </div>
    </div>
  );
}
