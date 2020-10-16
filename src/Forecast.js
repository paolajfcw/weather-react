import React, { useState } from "react";

import axios from "axios";
import "./Forecast.css";
import ForecastDisplay from "./ForecastDisplay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    console.log(forecast);
    return (
      <div className="row">
        <ForecastDisplay info={forecast.list[0]} scale={props.scale} />
        <ForecastDisplay info={forecast.list[1]} scale={props.scale} />
        <ForecastDisplay info={forecast.list[2]} scale={props.scale} />
        <ForecastDisplay info={forecast.list[3]} scale={props.scale} />
        <ForecastDisplay info={forecast.list[4]} scale={props.scale} />
        <ForecastDisplay info={forecast.list[5]} scale={props.scale} />
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=caa34f2f02bff4b74600363cf67bbbef&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}
