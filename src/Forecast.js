import React from "react";

import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
  return (
    <main>
      <div className="row" id="forecast">
        <div className="col-2 forecast-hours">
          <h4>11:00</h4>
          <WeatherIcon />
          <div>
            <strong id="max-temp">21°</strong>
            <span id="min-temp">20°</span>
          </div>
        </div>
        <div className="col-2 forecast-hours">
          <h4>11:00</h4>
          <WeatherIcon />
          <div>
            <strong id="max-temp">21°</strong>
            <span id="min-temp">20°</span>
          </div>
        </div>
        <div className="col-2 forecast-hours">
          <h4>11:00</h4>
          <WeatherIcon />
          <div>
            <strong id="max-temp">21°</strong>
            <span id="min-temp">20°</span>
          </div>
        </div>
        <div className="col-2 forecast-hours">
          <h4>11:00</h4>
          <WeatherIcon />
          <div>
            <strong id="max-temp">21°</strong>
            <span id="min-temp">20°</span>
          </div>
        </div>
        <div className="col-2 forecast-hours">
          <h4>11:00</h4>
          <WeatherIcon />
          <div>
            <strong id="max-temp">21°</strong>
            <span id="min-temp">20°</span>
          </div>
        </div>
        <div className="col-2 forecast-hours">
          <h4>11:00</h4>
          <WeatherIcon />
          <div>
            <strong id="max-temp">21°</strong>
            <span id="min-temp">20°</span>
          </div>
        </div>
      </div>
    </main>
  );
}
