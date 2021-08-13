import React from 'react';

function WeatherControls() {
  return (
    <div className="weather__controller">
      <WiCelsius
        size={iconSize}
        className="weather__controller-control"
        onClick={console.log(true)}
      />
      <WiFahrenheit
        size={iconSize}
        className="weather__controller-control"
        onClick={console.log(false)}
      />
    </div>
  );
}

export default WeatherControls;
