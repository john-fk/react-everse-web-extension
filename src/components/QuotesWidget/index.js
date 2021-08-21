import React, { useEffect, useState } from 'react';
import { SubHeading } from '../UI/Heading';
import { useQuery } from 'react-query';
import axios from 'axios';
import store from 'store';
import './QuotesWidget.scss';
import LoadingIcon from '../UI/LoadingIcon';
import Quote from './Quote';

const userQuotes = 'userQuotes';

const fetchInspirationDataFromApi = () =>
  axios(process.env.INSPIRATION_API_URL).then((res) => res.data);

const QuotesWidget = () => {
  const { data, isLoading, isError } = useQuery(
    userQuotes,
    fetchInspirationDataFromApi
  );
  const [currentQuote, setCurrentQuote] = useState([]);

  /*
  After fetching the quote RAW data returns a random quote as an Array
  */
  const getRandomQuotes = () =>
    !isLoading && data[Math.floor(Math.random() * data.length)];

  if (isLoading) return <LoadingIcon />;
  if (isError) return <SubHeading text={`Check your internet connection`} />;

  const { author, text } = getRandomQuotes();

  return (
    <>
      <SubHeading text="Inspiration quote for your day" />
      <div className="quotes">
        <div className="quotes__inner mt-3">
          {<Quote author={author} text={text} />}
        </div>
      </div>
    </>
  );
};

export default QuotesWidget;
