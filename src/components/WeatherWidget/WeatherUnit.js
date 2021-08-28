import React, { useState } from 'react';
import { kelvinToFahrenheit, kelvinToCelsius } from '../../utils';
import WeatherControls from './WeatherControls';

function WeatherUnit({ unitData }) {
  const defaultUnit = 'fahrenheit';
  const celsius = 'celsius';
  const kelvin = unitData?.temp;
  const convertedFahrenheit = kelvinToFahrenheit(kelvin);
  const convertedCelsius = kelvinToCelsius(kelvin);

  const [currentUnit, setCurrentUnit] = useState(() => defaultUnit);

  const handleFahrenheit = () => {
    setCurrentUnit(defaultUnit);
  };
  const handleCelsius = () => {
    setCurrentUnit(celsius);
  };

  return (
    <div className="weather__unit">
      {unitData && (
        <>
          <h2>
            {(currentUnit === defaultUnit && `${convertedFahrenheit}`) ||
              (currentUnit === celsius && `${convertedCelsius}`)}
          </h2>
          <WeatherControls
            isFahrenheit={handleFahrenheit}
            isCelsius={handleCelsius}
            isActive={currentUnit === defaultUnit && true}
          />
        </>
      )}
    </div>
  );
}

export default WeatherUnit;
