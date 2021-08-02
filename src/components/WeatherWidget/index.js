import React, { useEffect, useState } from 'react';
import WeatherCity from './WeatherCity';
import WeatherUnit from './WeatherUnit';
import WeatherCondition from './WeatherCondition';
import axios from 'axios';
import { useQuery } from 'react-query';
import useAxios from 'axios-hooks';
import BarLoader from 'react-spinners/BarLoader';
import { css } from '@emotion/core';
import { MdRefresh } from 'react-icons/md';
import { useRecoilValue } from 'recoil';
import { currentUserIp } from '../../EverseStates';
import './WeatherWidget.scss';
import WeatherIcon from './WeatherIcon';

const kelvinToFahrenheit = (unitValue) => {
  unitValue = parseFloat(unitValue);
  return Math.round((unitValue - 273.15) * 1.8 + 32);
};

const kelvinToCelsius = (unitValue) => {
  unitValue = parseFloat(unitValue);
  return Math.round(unitValue - 273.15);
};

const WeatherLocation = ({ weatherCity, weatherCountry }) => {
  return (
    <>
      <p className="weather__location">
        {weatherCity}, {weatherCountry}
      </p>
    </>
  );
};

const Unit = ({ data }) => {
  const [currentUnit, setCurrentUnit] = useState('');

  if (data !== undefined) {
    const kelvin = data.temp;
    const fahrenheit = kelvinToFahrenheit(kelvin);
    const celsius = kelvinToCelsius(kelvin);

    return (
      <div>
        <h2 className="weather__unit">{fahrenheit || celsius}&deg;</h2>
      </div>
    );
  }

  return null;
};

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState({});
  const ipData = useRecoilValue(currentUserIp);

  const { city, country, lat, lon, status } = ipData;
  const hasIpLoaded = ipData.status;

  const { data, isLoading, isError } = useQuery(
    ['userWeatherData'],
    async () => {
      const res = await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
      );
      const fetchedData = await res.data;
      setWeatherData(fetchedData);
      return fetchedData;
    },
    {
      enabled: !!hasIpLoaded,
    }
  );

  if (isLoading) return null;
  if (isError) return `Oops! Something went wrong: ${Error.message}`;

  return (
    <div className="weather">
      {!isLoading && (
        <>
          <WeatherIcon iconData={weatherData.current} />
          <Unit data={weatherData.current} />
          <WeatherLocation weatherCountry={country} weatherCity={city} />
        </>
      )}
    </div>
  );
};

export default WeatherWidget;
