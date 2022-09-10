import React from "react";
import "./HumidityWind.css";

export default class Humidity extends React.Component {
  render = () => {
    return (
      <ul>
        <li>
          Humidity: <span id="humidity"></span>%
        </li>
        <li>
          Wind: <span id="wind"></span> m/s
        </li>
      </ul>
    );
  };
}
