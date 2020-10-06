import React, { useState } from "react";
import WeatherForecastDetts from "./WeatherForecastDetts";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        {forecast.list.slice(0, 6).map(function (forecastItem) {
          return <WeatherForecastDetts details={forecastItem} />;
        })}
      </div>
    );
  } else {
    let apiKey = "f20508df85d5df6eefc781e283c32c80";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
  }
}
