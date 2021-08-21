import React, { useEffect, useState } from 'react';
import VerseOfTheDay from './VerseOfTheDay';
import QuoteOfTheDay from './QuoteOfTheDay';
import QuotesHeader from './QuotesHeader';
import { fetchData } from '../../utils';
import { Select } from 'antd';
import store from 'store';
import './QuotesWidget.scss';

const bibleAPI = 'https://beta.ourmanna.com/api/v1/get/?format=json';
const motivationAPI = 'https://type.fit/api/quotes';
const { Option } = Select;
const bString = 'spirituality';
const mString = 'motivational';
const storageKey = 'Current_quotes';

const QuotesWidget = () => {
  const [bible, setBible] = useState([]);
  const [motivation, setMotivation] = useState([]);
  const [mode, setMode] = useState(bString);

  const isBibleSelected = checkSelected(mode, bString);

  function handleChange(value) {
    value === bString ? setMode(value) : setMode(mString);
  }

  useEffect(() => {
    const storedQuotes = store.get(storageKey);
    storedQuotes && setMode(storedQuotes);
    // handleChange(storedQuotes);
  }, []);

  useEffect(() => {
    store.set(storageKey, mode);
  }, [mode]);

  useEffect(() => {
    const getAllData = async () => {
      const bibleData = await fetchData(bibleAPI);
      const motivationData = await fetchData(motivationAPI);
      const randomMotivationalQuote =
        motivationData[Math.floor(Math.random() * motivationData.length)];

      setBible(bibleData.verse);
      setMotivation(randomMotivationalQuote);
    };
    getAllData();
  }, []);

  const getLocalMode = () => {
    return store.get(storageKey) === bString ? mode : mString;
  };

  return (
    <div className="quotes">
      <div className="quotes__inner ">
        {isBibleSelected() && <VerseOfTheDay data={bible} />}
        {!isBibleSelected() && <QuoteOfTheDay data={motivation} />}

        <div className="quotes__settings ">
          <Select
            defaultValue={getLocalMode}
            style={{ width: 200 }}
            onChange={handleChange}
            bordered={false}
            className="quotes__options"
            dropdownClassName="quotes__dropdown"
          >
            <Option value={bString} disabled={isBibleSelected()}>
              Spirituality
            </Option>
            <Option value={mString} disabled={!isBibleSelected()}>
              Motivational
            </Option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default QuotesWidget;
function checkSelected(mode, str) {
  return () => (mode === str ? true : false);
}
