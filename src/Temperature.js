import React from "react";
import "./Temperature.css";

export default class Temperature extends React.Component {
  render = () => {
    return (
      <div className="temp">
        <strong id="actual-temp"></strong>
        <span className="units">
          {" "}
          <a href="" id="celsius-link" className="active">
            ºC
          </a>{" "}
          |{" "}
          <a href="" id="fahrenheit-link">
            ºF
          </a>
        </span>
      </div>
    );
  };
}
