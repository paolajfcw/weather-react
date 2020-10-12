import React, { useState } from "react";

import axios from "axios";
import "./Weather.css";
import TimeDate from "./TimeDate.js";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherInfo({
      loaded: true,
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      image: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSearch() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=caa34f2f02bff4b74600363cf67bbbef&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleSearch();
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  if (weatherInfo.loaded) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-5">
            <h1>
              <span className="temp">
                {Math.round(weatherInfo.temperature)}
              </span>
              <span className="degrees">
                <a href="/" className="font-day" id="celsius-temp">
                  °C
                </a>{" "}
                |{" "}
                <a href="/" className="font-day" id="fahrenheit-temp">
                  °F
                </a>
              </span>
            </h1>
            <TimeDate />
          </div>

          <div className="col-7 p-0 city-condition">
            <h2>
              <span>{weatherInfo.name.toUpperCase()}</span>
            </h2>
            <center>
              <img src={weatherInfo.image} alt={weatherInfo.description} />
            </center>
            <h3>
              <span>{weatherInfo.description}</span>
              <br />
              Wind: <span>{Math.round(weatherInfo.wind)}</span>km/h <br />
              Humidity: <span>{weatherInfo.humidity}</span>%
            </h3>
          </div>
        </div>

        <form className="Search" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-5 pr-1">
              <div className="form-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Enter your city"
                  autoComplete="off"
                  autoFocus="on"
                  onChange={getCity}
                />
              </div>
            </div>
            <div className="col-3 pr-0 pl-1">
              <button type="submit" className="btn btn-light">
                Search
              </button>
            </div>
            <div className="col-4 pl-1">
              <button
                type="button"
                className="btn btn-light"
                id="current-location"
              >
                <span role="img" aria-label="Location">
                  📍
                </span>{" "}
                Location
              </button>
            </div>
          </div>
        </form>
        <Forecast />
      </div>
    );
  } else {
    handleSearch();
    return "Loading...";
  }
}
