import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import CovidChart from './CovidChart';
import { SubHeading } from '../UI/Heading';
import { useRecoilState } from 'recoil';
import { currentUserIp } from '../../EverseStates';
import './CovidWidget.scss';

const CovidWidget = () => {
  const [ipAddress, setIpAddress] = useRecoilState(currentUserIp);

  const { data: ipData, isLoading: loadingIpAddress } = useQuery(
    'userIpAddress',
    async () => {
      const res = await axios(`${process.env.IP_ADDRESS_API_URL}`);
      const fetchedData = await res.data;
      const country = await fetchedData.country;
      setIpAddress(fetchedData);
      return country;
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
      <SubHeading text={`Current status in ${ipAddress.country}`} />
      <CovidChart covidData={[cases, recovered, deaths]} />
    </div>
  );
};
export default CovidWidget;
