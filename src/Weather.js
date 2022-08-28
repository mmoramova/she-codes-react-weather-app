import React, { useState } from "react";
import axios from 'axios';
import WeatherInfo from "./WeatherInfo";

import "./Weather.css"


export default function Weather(props) {

const[city, setCity] = useState(props.defaultCity);
const[weatherData, setWeatherData] = useState({ ready: false });

function handleResponse(response) {
     console.log(response.data);
     setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        city: response.data.name,
        date: new Date (response.data.dt * 1000)
     });
 }

 function search() {
    const ApiKey = "d1a86552de255334f6117b348c4519bd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ApiKey}`;
    axios.get(apiUrl).then(handleResponse);
 }

 function handleSubmit(event) {
    event.preventDefault();
    search();
 }

 function handleCityChange(event) {
    //event.preventDefault();
    setCity(event.target.value);
 }

 if (weatherData.ready) {
  return (
       <div className="weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
                    <input type="search"
                        placeholder="Enter a city.."
                        className="form-control"
                        autoFocus="on"
                        onChange={handleCityChange}
                    />
                </div>
                <div className="col-3">
                    <input type="submit"
                    value="Search"
                    className="btn btn-primary w-100"
                    />
                </div>
            </div>
        </form>
        <WeatherInfo data={weatherData}/>
       </div>
    );
  }
   else {
    search();
    return "loading..";
   }
}