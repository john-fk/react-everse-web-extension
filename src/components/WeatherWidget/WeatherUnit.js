import React, { useState } from 'react';
import { kelvinToFahrenheit, kelvinToCelsius } from '../../utils';

function WeatherUnit({ unitData }) {
  const [currentUnit, setCurrentUnit] = useState(false);

  const kelvin = unitData?.temp;
  const fahrenheit = kelvinToFahrenheit(kelvin);
  const celsius = kelvinToCelsius(kelvin);

  return (
    <div>
      {unitData && (
        <>
          <h2 className="weather__unit">
            {(currentUnit && `${fahrenheit}`) || (!currentUnit && `${celsius}`)}
          </h2>
        </>
      )}
    </div>
  );
}

export default WeatherUnit;
