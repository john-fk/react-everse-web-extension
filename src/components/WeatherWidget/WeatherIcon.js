import React from 'react';
import PropTypes from 'prop-types';
import { handleWeatherIcons } from '../../utils';

const WeatherIcon = ({ iconData }) => {
  return (
    <i className="weather__icon">
      {iconData && handleWeatherIcons(iconData.weather[0].id)}
    </i>
  );
};
WeatherIcon.propTypes = {
  iconData: PropTypes.object,
};
export default WeatherIcon;
