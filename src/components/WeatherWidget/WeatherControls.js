import React from 'react';
import { WiCelsius, WiFahrenheit } from 'react-icons/wi';

function WeatherControls({ isFahrenheit, isCelsius, isActive }) {
  return (
    <div className="weather__controls">
      <a onClick={isFahrenheit}>
        <span
          disabled={isActive}
          className={`weather__controls-item${
            isActive && '--active'
          } weather__controls-item`}
        >
          °F
        </span>
      </a>
      <hr style={{ margin: 0 }} />
      <a onClick={isCelsius}>
        <span
          disabled={!isActive}
          className={`weather__controls-item${
            !isActive && '--active'
          } weather__controls-item`}
        >
          °C
        </span>
      </a>
    </div>
  );
}

export default WeatherControls;
