import React from 'react';
import PropTypes from 'prop-types';

const WeatherCondition = ({ conditionData }) => {
  const mainCondition = conditionData.map((item) => item.main);

  return (
    <>
      <p className="text-sm">{mainCondition}</p>
    </>
  );
};

WeatherCondition.propTypes = { condition: PropTypes.array };
export default WeatherCondition;
