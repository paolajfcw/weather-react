import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="container">
      <section className="weather-content">
        <Weather />
        <Forecast />
      </section>
    </div>
  );
}
