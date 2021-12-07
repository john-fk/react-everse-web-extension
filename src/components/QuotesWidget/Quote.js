import React from 'react';

const Quote = ({ quoteData }) => {
  const text = quoteData?.text;
  const author = quoteData?.author;

  return (
    <div>
      <p className="quotes__content m-0">{text}</p>
      <p className="quotes__autour m-0">
        - {author === null ? 'Unknown' : author}
      </p>
    </div>
  );
};

export default Quote;
