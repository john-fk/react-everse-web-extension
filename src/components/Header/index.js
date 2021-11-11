import React, { useEffect, useState } from 'react';
import CalendarWidget from '../CalendarWidget';
import GreetingWidget from '../GreetingWidget';
import SearchInput from '../SearchInput';
import { Avatar, Button } from 'antd';
import './Header.scss';
import { useAuth0 } from '@auth0/auth0-react';
import store from 'store';
import LoginButton from './../core/Buttons/LoginButton';
import LogoutButton from './../core/Buttons/LogoutButton/index';

const Header = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [userData, setUserData] = useState();
  const userLocalData = store.get('userData');

  // ! Deejay: Get the users access token or store the data to work with locally

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      setUserData(user);
      store.set('userData', user);
    }

    if (!isAuthenticated && userLocalData) {
      setUserData(userLocalData);
    }
  }, [user]);

  return (
    <header className="header px-md-5 py-md-3">
      <GreetingWidget />
      <SearchInput />
      <CalendarWidget />
      {/* <div className="d-flex align-items-center justify-content-around ">
      </div> */}
    </header>
  );
};

export default Header;
