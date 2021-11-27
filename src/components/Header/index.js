import React, { useEffect, useState } from 'react';
import CalendarWidget from '../CalendarWidget';
import GreetingWidget from '../GreetingWidget';
import SearchBar from '../SearchBar';
import { Avatar, Button } from 'antd';
import './Header.scss';

const Header = () => {
  return (
    <header className="header px-md-5 py-md-3">
      <GreetingWidget />
      <SearchBar />
      <CalendarWidget />
    </header>
  );
};

export default Header;
