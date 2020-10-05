import React from "react";
import FormattedDate from "./FormattedDate";
import UnitConversion from "./UnitConversion";

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
                <img src={props.data.iconUrl} alt={props.data.description} />
              </span>{" "}
            </li>
          </ul>
        </div>
        <div className="col-6 ">
          <ul className="temp-description">
            <div className="current-details">
              <UnitConversion celsius={props.data.temperature} />
              <li>
                <small>
                  Humidity:
                  <span> {props.data.humidity}%</span>
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
