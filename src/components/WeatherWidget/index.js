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
import { requestUserGeoLocation } from '../../utils';
import moment from 'moment';

async function fetchedWeather(latitude, longitude) {
  const res = await axios(
    `${process.env.OPEN_WEATHER_MAP_API_URL}?lat=${latitude}&lon=${longitude}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
  );
  const fetchedData = await res.data;
  return fetchedData;
}

const WeatherWidget = () => {
  const ipData = useRecoilValue(currentUserIp);
  const [weatherData, setWeatherData] = useState({});
  const [userGeoLocation, setUserGeoLocation] = useState({});

  let hasIpLoaded = userGeoLocation?.lat ? userGeoLocation?.lat : ipData?.lat;

  const getLocationMethod = (latitudeType, longitudeType) => {
    if (userGeoLocation) {
      setUserGeoLocation((prev) => {
        return {
          lat: longitudeType,
          lon: latitudeType,
        };
      });
    }
  };

  const successIpLocation = (e) => {
    if (e.code === 1 && ipData) {
      const { lat, lon } = ipData;
      getLocationMethod(lat, lon);
    }
  };

  const successGeoLocation = (position) => {
    const { latitude, longitude } = position.coords;
    getLocationMethod(latitude, longitude);
  };

  const { data, isLoading, isError, isFetching } = useQuery(
    ['userWeatherData', userGeoLocation?.lat, userGeoLocation?.lon],
    () =>
      userGeoLocation &&
      fetchedWeather(userGeoLocation?.lat, userGeoLocation?.lon),

    {
      enabled: !!hasIpLoaded,
    }
  );

  useEffect(() => {
    requestUserGeoLocation(successGeoLocation, successIpLocation);
    setWeatherData(data);
  }, [data, ipData]);

  if (isFetching || !hasIpLoaded || isLoading) return <LoadingIcon />;
  if (isError) return <SubHeading text={`Check your internet connection`} />;

  return (
    <div className="weather">
      <SubHeading
        text={`Expect ${weatherData?.current.weather[0].description} today`}
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
