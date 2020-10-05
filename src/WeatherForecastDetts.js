import React from "react";
import IconUrl from "./IconUrl";

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
    <div className="WeatherForecastDetts">
      <ul className="col">
        <li>{hours()}</li>
        <li>
          {" "}
          <IconUrl data={props.details.weather[0].icon} />
        </li>
        <li>{temperature()}</li>
      </ul>
    </div>
  );
}
