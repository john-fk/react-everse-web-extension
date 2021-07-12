import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUserCity = async () =>
  await axios('http://ip-api.com/json').then((res) => res.data.city);

const CovidWidget = () => {
  // Queries
  const { data } = useQuery('userCity', fetchUserCity, {
    refetchOnWindowFocus: false,
  });

  return (
    <div className="">
      <div className="covid">
        Hello from Covid 19 in
        <p>{data}</p>
      </div>
    </div>
  );
};

/*
const CovidWidget = () => {
  // Queries
  const { isLoading, error, data } = useQuery('userIP', () => {
    return axios('http://ip-api.com/json').then((res) => res.data);
  });
  
  if (isLoading) return 'Loading...';
  
  if (error) return 'An error has occurred: ' + error.message;
  
  const userCity = !isLoading && data.city;
  return (
    <div className="">
    <div className="covid">
    Hello from Covid 19 in {userCity}
    <p></p>
    </div>
    </div>
    );
  };
  
  */
export default CovidWidget;
