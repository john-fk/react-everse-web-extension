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

const WeatherWidget = () => {
  // const [city, setCity] = useState([]);
  const ipData = useRecoilValue(currentUserIp);
  const { city, country, lat, lon, status } = ipData;
  const hasIpLoaded = ipData.status;

  const { data: weatherData, isLoading, isError } = useQuery(
    ['userWeatherData'],
    async () => {
      const res = await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
      );
      const fetchedData = await res.data;
      // TODO get the data to wait before fetching
      console.log(fetchedData);
      return fetchedData;
    },
    {
      enabled: !!hasIpLoaded,
    }
  );

  isLoading && <p>Loading...</p>;

  const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
  const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

  /*
  ! Render the data to the dom
  console.log(data);
   */

  return (
    <div className="weather">
      <p>
        {city}, {country}
      </p>
      <h2>{celsiusToFahrenheit(20)}</h2>
    </div>
  );
};

export default WeatherWidget;
