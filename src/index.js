import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weather from './weather';
import reportWebVitals from './reportWebVitals';
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Weather App</h1>
    <Weather />
    <div>
      <p><a href="https://github.com/VPaigePat/weather-react-app">Open-Source code</a>, by <a href="https://github.com/VPaigePat">Virginia-Paige Patrick</a> from <a href='https://www.shecodes.io/'>SheCodes</a></p>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
