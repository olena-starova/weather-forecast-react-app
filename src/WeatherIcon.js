import React from "react";
import "./WeatherIcon.css";

export default class WeatherIcon extends React.Component {
  render = () => {
    return (
      <ul>
        <li id="icon-place">
          <span role="img">🔆</span>
        </li>
        <li id="description">Clear</li>
      </ul>
    );
  };
}
