import React from "react";
import "./Temperature.css";

export default class Temperature extends React.Component {
  render = () => {
    return (
      <div className="temp">
        <strong id="actual-temp"></strong>
        <span className="units">ºC ºF</span>
      </div>
    );
  };
}
