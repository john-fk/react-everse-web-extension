import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { currentUserIp } from '../../EverseStates';
import './WeatherWidget.scss';
import WeatherIcon from './WeatherIcon';
import LoadingIcon from '../UI/LoadingIcon';
import { SubHeading } from '../UI/Heading';
import WeatherLocation from './WeatherLocation';
import WeatherUnit from './WeatherUnit';

async function fetchDataFromApi(lat, lon) {
  const res = await axios(
    `${process.env.OPEN_WEATHER_MAP_API_URL}?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
  );
  const fetchedData = await res.data;
  // console.log(fetchedData);
  return fetchedData;
}

const WeatherWidget = () => {
  const ipData = useRecoilValue(currentUserIp);

  const { lat, lon } = ipData;

  const [weatherData, setWeatherData] = useState({});

  const hasIpLoaded = ipData?.status;

  const { data, isLoading, isError, isFetching } = useQuery(
    ['userWeatherData', lat, lon],
    () => fetchDataFromApi(lat, lon),
    {
      enabled: !!hasIpLoaded,
    }
  );

  useEffect(() => {
    setWeatherData(data);
  }, [data]);

  if (isFetching || !hasIpLoaded || isLoading) return <LoadingIcon />;
  if (isError) return <SubHeading text={`Check your internet connection`} />;

  return (
    <div className="weather">
      <SubHeading
        text={`Expect ${weatherData?.current.weather[0].main} weather today`}
      />
      {!isLoading && (
        <>
          <div className="weather__inner">
            <WeatherIcon iconData={weatherData?.current} />
            <WeatherUnit unitData={weatherData?.current} />
            <WeatherLocation locationData={ipData} />
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherWidget;
