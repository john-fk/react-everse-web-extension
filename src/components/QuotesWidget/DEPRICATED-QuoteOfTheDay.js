import React from 'react';

const QuoteOfTheDay = ({ data }) => {
  const { text, author } = data;
  return (
    <>
      <p className="quotes__content">{text}</p>
      <p className="quotes__author">{author}</p>
    </>
  );
};

export default QuoteOfTheDay;
