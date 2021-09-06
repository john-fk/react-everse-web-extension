import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  WiDayThunderstorm,
  WiNightAltThunderstorm,
  WiDayShowers,
  WiNightAltShowers,
  WiDayRain,
  WiNightAltRain,
  WiDaySnow,
  WiNightAltSnow,
  WiDayFog,
  WiNightFog,
  WiDayCloudy,
  WiDaySunny,
  WiNightClear,
  WiNightAltCloudy,
  WiNa,
} from 'react-icons/wi';

const renderDayIcons = (id) => {
  return id >= 200 && id <= 232 ? (
    <WiDayThunderstorm />
  ) : id >= 300 && id <= 321 ? (
    <WiDayShowers />
  ) : id >= 500 && id <= 531 ? (
    <WiDayRain />
  ) : id >= 600 && id <= 622 ? (
    <WiDaySnow />
  ) : id >= 701 && id <= 781 ? (
    <WiDayFog />
  ) : id === 800 ? (
    <WiDaySunny />
  ) : id > 800 && id <= 804 ? (
    <WiDayCloudy />
  ) : (
    <WiNa />
  );
};

const renderNightIcons = (id) => {
  return id >= 200 && id <= 232 ? (
    <WiNightAltThunderstorm />
  ) : id >= 300 && id <= 321 ? (
    <WiNightAltShowers />
  ) : id >= 500 && id <= 531 ? (
    <WiNightAltRain />
  ) : id >= 600 && id <= 622 ? (
    <WiNightAltSnow />
  ) : id >= 701 && id <= 781 ? (
    <WiNightFog />
  ) : id === 800 ? (
    <WiNightClear />
  ) : id > 800 && id <= 804 ? (
    <WiNightAltCloudy />
  ) : (
    <WiNa />
  );
};

const WeatherIcon = ({ iconData }) => {
  const iconId = iconData?.weather[0].id;
  const currentHour = parseInt(moment().format('H'));

  return (
    <>
      <span className="weather__icon">
        {currentHour >= 19 || currentHour <= 6
          ? renderNightIcons(iconId)
          : renderDayIcons(iconId)}
      </span>
    </>
  );
};
WeatherIcon.propTypes = {
  iconData: PropTypes.object,
};
export default WeatherIcon;
