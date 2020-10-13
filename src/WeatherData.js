import React from "react";

import TimeDate from "./TimeDate.js";

export default function WeatherData(props) {
  return (
    <div className="row">
      <div className="col-5">
        <h1>
          <span className="temp">{Math.round(props.data.temperature)}</span>
          <span className="degrees">
            <a href="/" className="font-day">
              °C
            </a>{" "}
            |{" "}
            <a href="/" className="font-day">
              °F
            </a>
          </span>
        </h1>
        <TimeDate dayTime={props.data.date} />
      </div>

      <div className="col-7 p-0 city-condition">
        <h2>
          <span>{props.data.name.toUpperCase()}</span>
        </h2>
        <center>
          <img src={props.data.image} alt={props.data.description} />
        </center>
        <h3>
          <span>{props.data.description}</span>
          <br />
          Wind: <span>{Math.round(props.data.wind)}</span>km/h <br />
          Humidity: <span>{props.data.humidity}</span>%
        </h3>
      </div>
    </div>
  );
}
