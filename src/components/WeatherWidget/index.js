import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { currentUserIp } from '../../EverseStates';
import './WeatherWidget.scss';
import WeatherIcon from './WeatherIcon';
import LoadingIcon from '../UI/LoadingIcon';
import { WiCelsius, WiFahrenheit } from 'react-icons/wi';

const kelvinToFahrenheit = (unitValue) => {
  unitValue = parseFloat(unitValue);
  return `${Math.round((unitValue - 273.15) * 1.8 + 32)}­°F`;
};

const kelvinToCelsius = (unitValue) => {
  unitValue = parseFloat(unitValue);
  return `${Math.round(unitValue - 273.15)}°C`;
};

const WeatherLocation = ({ weatherCity, weatherCountry }) => {
  return (
    weatherCity !== undefined &&
    weatherCountry !== undefined && (
      <p className="weather__location my-1">
        {`${weatherCity},${weatherCountry}`}
      </p>
    )
  );
};

const WeatherUnit = ({ data, selectedUnit }) => {
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
};

const WeatherWidget = () => {
  const [currentUnit, setCurrentUnit] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  const ipData = useRecoilValue(currentUserIp);

  const { city, country, lat, lon, status } = ipData;
  const hasIpLoaded = ipData?.status;

  const { data, isLoading, isError, isFetching } = useQuery(
    ['userWeatherData'],
    async () => {
      const res = await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
      );
      const fetchedData = await res.data;
      setWeatherData(fetchedData);
      console.log(fetchedData);
      return fetchedData;
    },
    {
      enabled: !!hasIpLoaded,
    }
  );
  console.log(hasIpLoaded);

  if (isFetching || !hasIpLoaded || isLoading) return <LoadingIcon />;
  if (isError) return <SubHeading text={`Check your internet connection`} />;

  return (
    <div className="weather">
      {!isLoading && !!isFetching && (
        <>
          <UnitController
            iconSize="4rem"
            isUnitToggled={() => setCurrentUnit(!currentUnit)}
          />
          <WeatherIcon iconData={weatherData.current} />
          <WeatherUnit data={weatherData.current} selectedUnit={currentUnit} />
          <WeatherLocation weatherCountry={country} weatherCity={city} />
        </>
      )}
    </div>
  );
};

const UnitController = ({ isUnitToggled, iconSize }) => {
  // TODO add functionality to this

  return (
    <div className="weather__controller">
      <WiCelsius
        size={iconSize}
        className="weather__controller-control"
        onClick={isUnitToggled}
      />
      <WiFahrenheit
        size={iconSize}
        className="weather__controller-control"
        onClick={isUnitToggled}
      />
    </div>
  );
};

export default WeatherWidget;
