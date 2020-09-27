import React from "react";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherDetts(props) {
  return (
    <div className="Weatherdetts">
      <div className="row">
        <div className="col-6 ">
          <ul className="city">
            <li>
              <strong className="cityNow">{props.data.city}</strong>
            </li>
            <li className="last-updated">
              Last updated:
              <span className="date">
                {" "}
                <FormattedDate date={props.data.date} />
              </span>
            </li>
            <li className="card-subtitle mb-2 text-capitalize">
              {props.data.description}
            </li>

            <li className="card-title">
              <span className="weather-image">
                {" "}
                <ReactAnimatedWeather
                  icon="CLEAR_DAY"
                  color="goldenrod"
                  size={80}
                  animate={true}
                />
              </span>{" "}
            </li>
          </ul>
        </div>
        <div className="col-6 ">
          <ul className="temp-description">
            <div className="current-details">
              <li className="currentTemp">
                {Math.round(props.data.temperature)}{" "}
                <sup>
                  <a href="<" className="active">
                    {" "}
                    ℃{" "}
                  </a>{" "}
                  |<a href="<"> ℉ </a>
                </sup>
              </li>
              <li>
                <small>
                  Humidity:
                  <span> {props.data.humidity}</span>
                </small>
              </li>
              <li>
                <small>
                  Wind:
                  <span> {props.data.wind} km/h</span>
                </small>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
