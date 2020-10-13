import React from "react";

import TimeDate from "./TimeDate.js";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="row">
        <div className="col-5">
          <h1>
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="scales">
              <a href="/" className="font-scale">
                °C
              </a>{" "}
              |{" "}
              <a href="/" className="font-scale">
                °F
              </a>
            </span>
          </h1>
          <TimeDate dayTime={props.data.date} />
        </div>

        <div className="col-7 p-0 w-condition">
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
    </div>
  );
}
