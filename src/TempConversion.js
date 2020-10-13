import React, { useState } from "react";

export default function TempConversion(props) {
  const [scale, setScale] = useState("celsius");

  function displayCelsius(event) {
    event.preventDefault();
    setScale("celsius");
  }

  function displayFahrenheit(event) {
    event.preventDefault();
    setScale("fahrenheit");
  }

  if (scale === "celsius") {
    return (
      <h1>
        <span className="temperature">{Math.round(props.celsiusTemp)}</span>
        <span className="scales">
          <a href="/" className="font-scale">
            °C
          </a>{" "}
          |{" "}
          <a href="/" className="font-scale" onClick={displayFahrenheit}>
            °F
          </a>
        </span>
      </h1>
    );
  } else {
    let fahrenheit = (props.celsiusTemp * 9) / 5 + 32;
    return (
      <h1>
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="scales">
          <a href="/" className="font-scale" onClick={displayCelsius}>
            °C
          </a>{" "}
          |{" "}
          <a href="/" className="font-scale">
            °F
          </a>
        </span>
      </h1>
    );
  }
}
