import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div classname="container">
        <Weather />
        <footer>
          This project was coded by Olena Starova and is{" "}
          <a href="https://github.com/olena-starova/weather-forecast-react-app">
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://transcendent-churros-77c234.netlify.app">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
