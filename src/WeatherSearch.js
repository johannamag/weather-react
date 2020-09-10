import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [load, setLoad] = useState(false);
  const [temp, setTemp] = useState({});

  function showWeather(response) {
    setLoad(true);
    setTemp({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let key = `ab96d1f59a7ee590668ddadbffe2617d`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(showWeather);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" onChange={changeCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (load) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(temp.temperature)}°C</li>
          <li>Description: {temp.description}</li>
          <li>Humidity: {temp.humidity}%</li>
          <li>Wind: {temp.wind}km/h</li>
          <li>
            <img src={temp.icon} alt={temp.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
