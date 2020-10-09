import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <Forecast />
      </div>
    </div>
  );
}
