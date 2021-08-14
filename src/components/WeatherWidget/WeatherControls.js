import React from 'react';
import { WiCelsius, WiFahrenheit } from 'react-icons/wi';

function WeatherControls({ handleClick }) {
  return (
    <div className="weather-controls">
      <a className="weather-controls__item" onClick={handleClick}>
        <span>°F</span>
      </a>
      <a
        className="weather-controls__item weather-controls__item--active"
        onClick={handleClick}
      >
        <span>°C</span>
      </a>
    </div>
  );
}

export default WeatherControls;
