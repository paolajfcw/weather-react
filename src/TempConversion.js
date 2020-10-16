import React from "react";

export default function TempConversion(props) {
  function displayCelsius(event) {
    event.preventDefault();
    props.setScale("celsius");
  }

  function displayFahrenheit(event) {
    event.preventDefault();
    props.setScale("fahrenheit");
  }

  if (props.scale === "celsius") {
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
