import React, { useEffect, useState } from 'react';
import WeatherCity from './WeatherCity';
import WeatherUnit from './WeatherUnit';
import WeatherCondition from './WeatherCondition';
import axios from 'axios';
import useAxios from 'axios-hooks';
import PulseLoader from 'react-spinners/PulseLoader';
import { css } from '@emotion/core';
import './index.scss';

const WeatherWidget = () => {
  const [city, setCity] = useState([]);

  // Can be a string as well. Need to ensure each key-value pair ends with ;
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const getCity = axios('http://ip-api.com/json');
  getCity
    .then((res) => setCity(res.data.city))
    .catch((err) => `Oops there was an error ${err}`);

  const requestOptions = {
    method: 'GET',
    url: `https://api.openweathermap.org/data/2.5/weather`,
    params: {
      q: city,
      appid: process.env.OPEN_WEATHER_MAP_API_KEY,
      units: 'imperial',
    },
  };

  const [{ data, loading, error }, reFetchData] = useAxios(requestOptions);

  if (loading)
    return <PulseLoader loading={true} css={override} size={10} color="#FFF" />;
  if (error) return <p>Error!</p>;
  console.log(data);
  return (
    <div className="bg1">
      <div className="weather">
        <div className="weather__temp">
          <WeatherCity city={city} />
          <WeatherUnit data={data} />
          <WeatherCondition conditionData={data.weather} />
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
