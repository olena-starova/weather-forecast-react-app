import React from "react";
import "./Temperature.css";

export default class Temperature extends React.Component {
  render = () => {
    return (
      <div className="temp">
        <strong id="actual-temp"></strong>
        <span className="units">
          {" "}
          <button id="celsius-link" className="active">
            ºC
          </button>{" "}
          | <button id="fahrenheit-link">ºF</button>
        </span>
      </div>
    );
  };
}
