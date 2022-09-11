import React from "react";
import "./Date.css";

export default class Source extends React.Component {
  render = () => {
    return (
      <div className="source">
        This project was coded by Olena Starova and is{" "}
        <a href="https://github.com/olena-starova/weather-forecast-react-app">
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a href="https://transcendent-churros-77c234.netlify.app">
          hosted on Netlify
        </a>
      </div>
    );
  };
}
