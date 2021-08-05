import React from 'react';
import PropTypes from 'prop-types';
import {
  WiThunderstorm,
  WiSleet,
  WiRain,
  WiSnow,
  WiFog,
  WiCloud,
  WiCloudy,
  WiNa,
} from 'react-icons/wi';

const WeatherIcon = ({ iconData }) => {
  const handleIcon = (id) => {
    return id >= 200 && id < 232 ? (
      <WiThunderstorm />
    ) : id >= 300 && id < 321 ? (
      <WiSleet />
    ) : id >= 500 && id < 531 ? (
      <WiRain />
    ) : id >= 600 && id < 622 ? (
      <WiSnow />
    ) : id >= 701 && id < 781 ? (
      <WiFog />
    ) : id === 800 ? (
      <WiCloudy />
    ) : id > 800 && id <= 804 ? (
      <WiCloudy />
    ) : (
      <WiNa />
    );
  };

  return (
    <i className="weather__icon">
      {iconData && handleIcon(iconData.weather[0].id)}
    </i>
  );
};
WeatherIcon.propTypes = {
  iconData: PropTypes.object,
};
export default WeatherIcon;
