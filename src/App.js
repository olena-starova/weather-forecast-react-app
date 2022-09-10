import React from "react";
import Projectname from "./Projectname";
import SearchEngine from "./SearchEngine.js";
import City from "./City";
import Date from "./Date";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import HumidityWind from "./HumidityWind";
import Source from "./Source";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <Projectname />
        <div className="card-body">
          <div className="container">
            <div className="row">
              <SearchEngine />
              <City />
              <Date />
              <div className="container">
                <div className="row">
                  <div className="col">
                    <WeatherIcon />
                  </div>
                  <div className="col">
                    <Temperature />
                  </div>
                  <div className="col">
                    <HumidityWind />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <Source />
        </div>
      </div>
    </div>
  );
}
