import React from 'react';
import CalendarWidget from '../CalendarWidget';
import GreetingWidget from '../GreetingWidget';

import './Header.scss';

const Header = () => {
  return (
    <header className="header px-md-5 py-md-3">
      <GreetingWidget />
      <CalendarWidget />
    </header>
  );
};

export default Header;
