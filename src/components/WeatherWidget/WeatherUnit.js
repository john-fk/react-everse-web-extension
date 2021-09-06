import React, { useState, useEffect } from 'react';
import { kelvinToFahrenheit, kelvinToCelsius } from '../../utils';
import WeatherControls from './WeatherControls';
import store from 'store';

function WeatherUnit({ unitData }) {
  const defaultUnit = 'fahrenheit';
  const celsius = 'celsius';

  const storageKey = 'local-selected-unit';

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

  useEffect(() => {
    const storedUnit = store.get(storageKey);
    storedUnit && setCurrentUnit(storedUnit);
  }, []);

  useEffect(() => {
    store.set(storageKey, currentUnit);
  }, [currentUnit]);

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
