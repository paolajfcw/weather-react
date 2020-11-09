import React from "react";

import TimeDate from "./TimeDate.js";
import WeatherIcon from "./WeatherIcon.js";
import TempConversion from "./TempConversion.js";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="row">
        <div className="col-5 col-md-6">
          <TempConversion
            celsiusTemp={props.data.temperature}
            scale={props.scale}
            setScale={props.setScale}
          />
          <TimeDate dayTime={props.data.date} />
        </div>

        <div className="col-7 col-md-6 p-0">
          <h2>
            <span>{props.data.cityName.toUpperCase()}</span>
          </h2>
          <center>
            <WeatherIcon iconCode={props.data.image} />
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
