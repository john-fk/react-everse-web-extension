import React from 'react';

const VerseOfTheDay = ({ data }) => {
  let { text, reference } = data.details || '--';

  return (
    <>
      <p className="quotes__content">{text}</p>
      <p className="quotes__author">{reference}</p>
    </>
  );
};

export default VerseOfTheDay;
