import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { currentUserIp } from '../../EverseStates';
import CovidChart from './CovidChart';
import CountryFlag from './CountryFlag';
import { SubHeading } from '../UI/Heading';
import LoadingIcon from '../UI/LoadingIcon';
import './CovidWidget.scss';

const CovidWidget = () => {
  const setIpAddress = useSetRecoilState(currentUserIp);

  const { data: ipData, isLoading: loadingIpAddress } = useQuery(
    'userIpAddress',
    async () => {
      const res = await axios(`${process.env.IP_ADDRESS_API_URL}`);
      const fetchedData = await res.data;
      const country = await fetchedData.country;
      setIpAddress(fetchedData);
      return country;
    }
  );

  const { data: covidData, isLoading, isError } = useQuery(
    'userCovidStats',
    async () => {
      const res = await axios(
        `${process.env.COVID19_API_URL}${ipData}?yesterday=true`
      );
      const fetchedData = await res.data;
      console.log(fetchedData);
      return fetchedData;
    },
    { enabled: !loadingIpAddress, refetchOnWindowFocus: false }
  );

  if (loadingIpAddress || isLoading) return <LoadingIcon />;
  if (isError) return <SubHeading text={`Check your internet connection`} />;

  const {
    todayCases,
    todayRecovered,
    critical,
    todayDeaths,
    country,
    countryInfo,
  } = covidData;

  return (
    <div className="covid">
      <div className="d-flex align-items-center">
        <SubHeading
          text={`Update status for ${country} `}
          children={
            <CountryFlag imageUrl={countryInfo.flag} imageAlt={country} />
          }
        />
      </div>

      <CovidChart
        covidData={[todayCases, todayRecovered, critical, todayDeaths]}
      />
    </div>
  );
};
export default CovidWidget;
