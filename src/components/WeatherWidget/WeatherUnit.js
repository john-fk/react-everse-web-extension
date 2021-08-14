import React, { useState } from 'react';
import { kelvinToFahrenheit, kelvinToCelsius } from '../../utils';
import WeatherControls from './WeatherControls';

function WeatherUnit({ unitData }) {
  const [currentUnit, setCurrentUnit] = useState(false);

  const kelvin = unitData?.temp;
  const fahrenheit = kelvinToFahrenheit(kelvin);
  const celsius = kelvinToCelsius(kelvin);

  const handleUnitChanged = () => {
    // Change the states compar deprecated logical
    console.log('clicked');
    setCurrentUnit(!currentUnit);
  };

  return (
    <div className="weather__unit">
      {unitData && (
        <>
          <h2>
            {(currentUnit && `${fahrenheit}`) || (!currentUnit && `${celsius}`)}
          </h2>
          <WeatherControls handleClick={handleUnitChanged} />
        </>
      )}
    </div>
  );
}

export default WeatherUnit;
