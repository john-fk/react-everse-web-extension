import React, { useState } from 'react';
import { kelvinToFahrenheit, kelvinToCelsius } from '../../utils';

function WeatherUnit({ data }) {
  const [currentUnit, setCurrentUnit] = useState(true);

  const kelvin = data?.temp;
  const fahrenheit = kelvinToFahrenheit(kelvin);
  const celsius = kelvinToCelsius(kelvin);

  return (
    <div>
      {data && (
        <>
          <h2 className="weather__unit">
            {(currentUnit && fahrenheit) || (!currentUnit && celsius)}
          </h2>
        </>
      )}
    </div>
  );
}

export default WeatherUnit;
