import React from "react";
import CurrentTemp from "./CurrentTemp";
import "bootstrap/dist/css/bootstrap.css";
import "./weather.css";
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

export default function Weather() {
  return (
    <div>
      <div className="Weather">
        <div className="container">
          <div className="card w-50">
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-8 pr-0 mt-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search City"
                      autoFocus="on"
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
              <CurrentTemp defaultCity="Vancouver" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
