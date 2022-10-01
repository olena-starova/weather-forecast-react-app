import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Kyiv</h1>
      <ul>
        <li>Sunday, 8 p.m.</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Cloudy"
          />
          15 ºC
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 35%</li>
            <li>Humidity: 75%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
