import React from 'react';

const CountryFlag = ({ imageUrl, imageAlt }) => {
  return (
    <img
      src={imageUrl}
      alt={`${imageAlt} flag`}
      style={{ width: '5.5%', borderRadius: '3px' }}
      className="mx-1"
    />
  );
};

export default CountryFlag;
