import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon() {
  return (
    <div className="weather-icon">
      <ReactAnimatedWeather
        icon="PARTLY_CLOUDY_DAY"
        color="white"
        size={70}
        animate={true}
      />
    </div>
  );
}
