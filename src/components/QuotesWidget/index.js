import React, { useEffect, useState } from 'react';
import { SubHeading } from '../UI/Heading';
import { useQuery } from 'react-query';
import store from 'store';
import moment from 'moment';
import './QuotesWidget.scss';
import LoadingIcon from '../UI/LoadingIcon';
import Quote from './Quote';
import { fetchInspirationDataFromApi } from '../../api/fetchDataFromApi';
import { refreshLocalStorageDataByDate } from '../../utils';

const QuotesWidget = () => {
  const [currentQuote, setCurrentQuote] = useState([]);

  const {
    data: serverData,
    isLoading,
    isError,
  } = useQuery('fetched-quote', fetchInspirationDataFromApi);

  const renderLocalStorageData = (key, storedData) => {
    const createdAt = moment().date();
    const localData = store.get(key);

    if (!localData) {
      setCurrentQuote({ createdAt, storedData });
      store.set(key, { createdAt, storedData });
    } else {
      setCurrentQuote(localData);
      refreshLocalStorageDataByDate(key, localData.createdAt);
    }
  };

  useEffect(() => {
    if (!isLoading) renderLocalStorageData('local_quote', serverData);
  }, [serverData]);

  //Error Handles
  if (isError) return <SubHeading text={`Check your internet connection`} />;

  return (
    <>
      <SubHeading text="Inspiration quote for your day" />
      <div className="quotes">
        <div className="quotes__inner mt-3">
          {isLoading ? (
            <LoadingIcon />
          ) : (
            <Quote quoteData={currentQuote?.storedData} />
          )}
        </div>
      </div>
    </>
  );
};

export default QuotesWidget;
