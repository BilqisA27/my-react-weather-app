import React, { useState } from "react";
import WeatherDetts from "./WeatherDetts";
import axios from "axios";
import "./CurrentTemp.css";
const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

export default function CurrentTemp(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ done: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      done: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "adc304e0d775bfcd34cc43d2a3830fc0";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChangeCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.done) {
    return (
      <div className="CurrentTemp">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8 pr-0 mt-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search City"
                autoFocus="on"
                onChange={handleChangeCity}
              />
            </div>
            <div className="col-1 pl-0 mt-4">
              <button type="submit" className="btn btn-outline-primary">
                <span>
                  {" "}
                  <Emoji label="search" symbol="🔍" />
                </span>
              </button>
            </div>
            <div className="col-1 pl-0 mt-4">
              <button type="button" className="btn btn-info">
                Current
              </button>
            </div>
          </div>
        </form>
        <br />
        <div className="card ml-2">
          <div className="card-body day">
            <div className="row">
              <div className="col">
                <div>
                  <div className="card-text">
                    <br />
                    <WeatherDetts data={weatherData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
