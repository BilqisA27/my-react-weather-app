import React from "react";
import CurrentTemp from "./CurrentTemp";
import "bootstrap/dist/css/bootstrap.css";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="card w-50">
          <CurrentTemp defaultCity="Vancouver" />
        </div>
      </div>
    </div>
  );
}
