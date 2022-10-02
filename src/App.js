import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div classname="container">
        <Weather defaultCity="Kharkiv" />
        <footer>
          This project was coded by{" "}
          <a href="https://spiffy-cucurucho-a2d46c.netlify.app/index.html">
            Olena Starova
          </a>{" "}
          and is{" "}
          <a href="https://github.com/olena-starova/weather-forecast-react-app">
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://sprightly-lily-25b26e.netlify.app">Netlify</a>.
        </footer>
      </div>
    </div>
  );
}
