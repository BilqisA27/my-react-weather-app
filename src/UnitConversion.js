import React, { useState } from "react";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="UnitConversion">
        <li className="currentTemp">
          {Math.round(props.celsius)}{" "}
          <sup>
            {" "}
            ℃ |
            <a href="<" onClick={convertToFahrenheit}>
              {" "}
              ℉{" "}
            </a>
          </sup>
        </li>
      </div>
    );
  } else {
    return (
      <div className="UnitConversion">
        <li className="currentTemp">
          {Math.round(fahrenheit())}{" "}
          <sup>
            <a href="<" onClick={convertToCelsius}>
              {" "}
              ℃
            </a>{" "}
            | ℉
          </sup>
        </li>
      </div>
    );
  }
}
