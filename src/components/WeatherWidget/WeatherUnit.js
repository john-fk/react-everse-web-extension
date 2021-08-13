import React from 'react';
import { kelvinToFahrenheit, kelvinToCelsius } from '../../utils';

function WeatherUnit({ data, selectedUnit }) {
  const kelvin = data?.temp;
  const fahrenheit = kelvinToFahrenheit(kelvin);
  const celsius = kelvinToCelsius(kelvin);

  return (
    <div>
      {data && (
        <>
          <h2 className="weather__unit">
            {(selectedUnit && fahrenheit) || (!selectedUnit && celsius)}
          </h2>
        </>
      )}
    </div>
  );
}

export default WeatherUnit;
