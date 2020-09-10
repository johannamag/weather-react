import React from "react";
import "./styles.css";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <a target="_blank" href="https://github.com/johannamag/weather-react">
        Github
      </a>
      <WeatherSearch />
    </div>
  );
}
