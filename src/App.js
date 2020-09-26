import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <Weather />
        Weather App
        <a
          href="https://github.com/BilqisA27/my-react-weather-app.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Github link{" "}
        </a>
      </div>
    </div>
  );
}
