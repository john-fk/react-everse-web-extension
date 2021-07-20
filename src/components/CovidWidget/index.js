import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import CovidChart from './CovidChart';
import './CovidWidget.scss';

const CovidWidget = () => {
  const { data: ipData, isLoading: loadingIpAddress } = useQuery(
    'userIpAddress',
    async () => {
      const res = await axios(`${process.env.IP_ADDRESS_API_URL}`);
      const fetchedData = await res.data;
      return fetchedData.country;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: covidData, isLoading, isError } = useQuery(
    'userCovidStats',
    async () => {
      const res = await axios(`${process.env.COVID19_API_URL}${ipData}`);
      const fetchedData = await res.data;
      return fetchedData;
    },
    { enabled: !loadingIpAddress, refetchOnWindowFocus: false }
  );

  if (loadingIpAddress || isLoading) return null;
  if (isError) return `Oops! Something went wrong: ${Error.message}`;

  const { cases, recovered, tests, deaths } = covidData;

  return (
    <div className="covid">
      <CovidChart covidData={[cases, recovered, deaths]} />
    </div>
  );
};
export default CovidWidget;
