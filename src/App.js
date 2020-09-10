import React from "react";
import "./styles.css";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <form
        method="get"
        action="https://github.com/johannamag/weather-react"
        target="_blank"
      >
        <input class="button" type="submit" value="Github" />
      </form>
    </div>
  );
}
