import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <center>
          <a
            href="https://github.com/paolajfcw/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Jhoselyn Farfan
        </center>
      </div>
    </div>
  );
}
