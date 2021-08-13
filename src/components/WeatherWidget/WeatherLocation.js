import React from 'react';

function WeatherLocation({ propsData }) {
  const { city, country, status } = propsData;
  return (
    status === 'success' && (
      <div className="weather__location my-1">
        <p>{`${city},${country}`}</p>
      </div>
    )
  );
}

export default WeatherLocation;
