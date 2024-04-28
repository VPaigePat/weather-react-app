import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
 let [city, setCity] = useState(" ");
 let [weather, setWeather] = useState(" ");
 let [loaded, setLoaded] =  useState (false);

 function handleSubmit(event) {
  event.preventDefault();
  let apiKey = "8ca7dd4e61360b90fb66918853670e48";
  let units = "metric"
  let apiURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
  axios.get(apiURL).then(showWeather);
}

  function showWeather(response){
    setLoaded(true);
    setWeather({
      temperature:response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  function cityInquiry(event){
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
      type="search"
      placeholder="Enter a city"
      onChange={cityInquiry}
    />
    <button type="submit"> Search </button>
    </form>
    );
    if (loaded) {
      return (
        <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}</li>
          <li>Description: {(weather.description)}</li>
          <li>Humidity: {Math.round(weather.humidity)}</li>
          <li>Wind: {Math.round(weather.wind)}</li>
          <li>
            <img
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.description}
            />
            </li></ul>
            </div>
      );
    } else {
      return form;
    }
}