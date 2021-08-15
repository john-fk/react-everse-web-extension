import React from 'react';

function WeatherLocation({ locationData }) {
  const { city, country, status } = locationData;
  return (
    status === 'success' && (
      <div className="weather__location my-1">
        <p>{`${city},${country}`}</p>
      </div>
    )
  );
}

export default WeatherLocation;
