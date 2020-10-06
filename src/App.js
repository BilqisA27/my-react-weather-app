import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <Weather />
        <div className="link">
          This project was coded by Bilqis Agboke and is
          <a
            className="link"
            href="https://github.com/BilqisA27/my-react-weather-app.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
