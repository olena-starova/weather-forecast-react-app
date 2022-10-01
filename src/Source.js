import React from "react";
import "./Date.css";

export default class Source extends React.Component {
  render = () => {
    return (
      <footer>
        This project was coded by Olena Starova and is{" "}
        <a
          href="https://github.com/olena-starova/weather-forecast-react-app"
          target="_blank"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://transcendent-churros-77c234.netlify.app"
          target="_blank"
        >
          hosted on Netlify
        </a>
      </footer>
    );
  };
}
