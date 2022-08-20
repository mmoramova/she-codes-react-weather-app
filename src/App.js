import React from 'react';
import Weather from './Weather';
import axios from 'axios';

import './App.css';

export default function App() {
  return (
    <div className="App"> 
    <div className='container'>
    <h1>Weather App</h1>
        <Weather defaultCity="Barcelona" /> 
        <footer>
          This project was coded by Miriam M and is {" "}
          <a href='https://github.com/mmoramova/she-codes-react-weather-app'
          target="_blank">
            opend-sourced on Github
          </a>
        </footer>
        </div>
    </div>
  );
}