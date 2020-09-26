import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

import "./CurrentTemp.css";

export default function CurrentTemp(props) {
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
    });
  }
  if (weatherData.done) {
    return (
      <div className="CurrentTemp">
        <div className="card ml-2">
          <div className="card-body day">
            <div className="row">
              <div className="col">
                <div>
                  <div className="card-text">
                    <br />
                    <div className="row">
                      <div className="col-6 ">
                        <ul className="city">
                          <li>
                            <strong className="cityNow">
                              {weatherData.city}
                            </strong>
                          </li>
                          <li className="last-updated">
                            Last updated:
                            <span className="date"> Monday Sept 18</span>
                          </li>
                          <li className="card-subtitle mb-2 text-capitalize">
                            {weatherData.description}
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
                              {Math.round(weatherData.temperature)}{" "}
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
                                <span> {weatherData.humidity}</span>
                              </small>
                            </li>
                            <li>
                              <small>
                                Wind:
                                <span> {weatherData.wind} km/h</span>
                              </small>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "adc304e0d775bfcd34cc43d2a3830fc0";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
