import React from "react";
import IconUrl from "./IconUrl";
import "./WeatherForecastDetts.css";

export default function WeatherForecastDetts(props) {
  function hours() {
    let date = new Date(props.details.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.details.main.temp);
    return `${temperature}℃`;
  }

  return (
    <div className="WeatherForecastDetts col-2">
      <div className="col">{hours()}</div>
      <div className="col image">
        {" "}
        <IconUrl data={props.details.weather[0].icon} />
      </div>
      <div className="col">{temperature()}</div>
    </div>
  );
}
