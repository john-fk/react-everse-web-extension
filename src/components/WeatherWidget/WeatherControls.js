import React from 'react';
import { WiCelsius, WiFahrenheit } from 'react-icons/wi';

function WeatherControls({ isFahrenheit, isCelsius, isActive }) {
  return (
    <div className="weather-controls">
      <a onClick={isFahrenheit}>
        <span
          disabled={isActive}
          className={`weather-controls__item weather-controls__item${
            isActive && '--active'
          }`}
        >
          °F
        </span>
      </a>
      <hr style={{ margin: 0 }} />
      <a onClick={isCelsius}>
        <span
          disabled={!isActive}
          className={`weather-controls__item weather-controls__item${
            !isActive && '--active'
          }`}
        >
          °C
        </span>
      </a>
    </div>
  );
}

export default WeatherControls;
