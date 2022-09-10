import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in Lviv is ${Math.round(response.data.main.temp)}`);
  }
  let apiKey = "d5c0155cd147c2d7c821980db5dc591e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello!</h2>;
}
