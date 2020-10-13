import React from "react";

import "./TimeDate.css";

export default function TimeDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.dayTime.getDay()];
  let hours = props.dayTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.dayTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <ul className="TimeDate">
      <li>
        {day} {hours}:{minutes}
      </li>
    </ul>
  );
}
