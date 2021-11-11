import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import './LogoutButton.scss';
import store from 'store';

const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    store.set('userData', '');
    logout({ returnTo: window.location.origin });
    console.log('Clicked');
  };

  return (
    <>
      <button onClick={handleLogout} className="logout-button">
        Log out
      </button>
    </>
  );
};

export default LogoutButton;
