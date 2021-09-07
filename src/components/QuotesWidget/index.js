import React, { useEffect, useState } from 'react';
import { SubHeading } from '../UI/Heading';
import { useQuery } from 'react-query';
import axios from 'axios';
import store from 'store';
import moment from 'moment';
import './QuotesWidget.scss';
import LoadingIcon from '../UI/LoadingIcon';
import Quote from './Quote';

const storageKey = 'local-selected-quote';

const QuotesWidget = () => {
  const [currentQuote, setCurrentQuote] = useState([]);
  const storedQuote = store.get(storageKey);

  const fetchInspirationDataFromApi = () =>
    axios(process.env.INSPIRATION_API_URL).then((res) => {
      const allFetchedQuotes = res.data;
      const randomQuote = getRandomQuotes(allFetchedQuotes);
      storeRandomQuotes(randomQuote);
      return randomQuote;
    });

  const getRandomQuotes = (allQuotes) =>
    allQuotes[Math.floor(Math.random() * allQuotes.length)];

  const storeRandomQuotes = (fetchedDataValue) => {
    const refreshTime = moment().format('LT');

    if (refreshTime === '00:00 PM' || !storedQuote) {
      store.set(storageKey, fetchedDataValue);
      setCurrentQuote(fetchedDataValue); // Updates the currentQuote at set resetTime or if no quote in LS
      return;
    }
  };

  const { data, isLoading, isError } = useQuery(
    'fetched-quote',
    fetchInspirationDataFromApi
  );

  useEffect(() => {
    storedQuote && storedQuote !== data
      ? setCurrentQuote(storedQuote)
      : storeRandomQuotes(data);
  }, []);

  if (isLoading && !storedQuote) return <LoadingIcon />;
  if (isError) return <SubHeading text={`Check your internet connection`} />;

  return (
    <>
      <SubHeading text="Inspiration quote for your day" />
      <div className="quotes">
        <div className="quotes__inner mt-3">
          {<Quote author={currentQuote?.author} text={currentQuote?.text} />}
        </div>
      </div>
    </>
  );
};

export default QuotesWidget;
