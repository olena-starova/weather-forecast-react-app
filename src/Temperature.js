import React from "react";
import "./Temperature.css";

export default class Temperature extends React.Component {
  render = () => {
    return (
      <div className="temp">
        <strong id="actual-temp"></strong>
        <span className="units">
          {" "}
          <a
            href="https://legendary-tarsier-4424bb.netlify.app"
            id="celsius"
            className="active"
          >
            ºC
          </a>{" "}
          |{" "}
          <a
            href="https://legendary-tarsier-4424bb.netlify.app"
            id="fahrenheit"
          >
            ºF
          </a>
        </span>
      </div>
    );
  };
}
