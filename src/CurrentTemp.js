import React, { useState } from "react";
import WeatherDetts from "./WeatherDetts";
import WeatherForecast from "./WeatherForecast";

import axios from "axios";
import "./CurrentTemp.css";

export default function CurrentTemp(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ done: false });
  function handleResponse(response) {
    setWeatherData({
      done: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "f20508df85d5df6eefc781e283c32c80";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
      <div className="currentTemp">
        <div className="card-body">
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
                <button type="submit" className="btn btn-info">
                  search
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
          <WeatherForecast city={weatherData.city} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
