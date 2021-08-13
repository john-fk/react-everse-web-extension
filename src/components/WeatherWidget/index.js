import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { currentUserIp } from '../../EverseStates';
import './WeatherWidget.scss';
import WeatherIcon from './WeatherIcon';
import LoadingIcon from '../UI/LoadingIcon';
import { WiCelsius, WiFahrenheit } from 'react-icons/wi';
// import { kelvinToFahrenheit, kelvinToCelsius } from '../../utils';
import WeatherLocation from './WeatherLocation';
import WeatherUnit from './WeatherUnit';

// const WeatherUnit = ({ data, selectedUnit }) => {
//   const kelvin = data?.temp;
//   const fahrenheit = kelvinToFahrenheit(kelvin);
//   const celsius = kelvinToCelsius(kelvin);

//   return (
//     <div>
//       {data && (
//         <>
//           <h2 className="weather__unit">
//             {(selectedUnit && fahrenheit) || (!selectedUnit && celsius)}
//           </h2>
//         </>
//       )}
//     </div>
//   );
// };

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState({});

  const ipData = useRecoilValue(currentUserIp);

  const { lat, lon } = ipData;
  const hasIpLoaded = ipData?.status;

  const { data, isLoading, isError, isFetching } = useQuery(
    ['userWeatherData'],
    async () => {
      const res = await axios(
        `${process.env.OPEN_WEATHER_MAP_API_URL}?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
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

  if (isFetching || !hasIpLoaded || isLoading) return <LoadingIcon />;
  if (isError) return <SubHeading text={`Check your internet connection`} />;

  return (
    <div className="weather">
      {!isLoading && (
        <>
          <UnitController iconSize="4rem" />
          <WeatherIcon iconData={weatherData.current} />
          <WeatherUnit data={weatherData?.current} />
          <WeatherLocation propsData={ipData} />
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
        onClick={console.log(true)}
      />
      <WiFahrenheit
        size={iconSize}
        className="weather__controller-control"
        onClick={console.log(false)}
      />
    </div>
  );
};

export default WeatherWidget;
