import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import './LogoutButton.scss';
import store from 'store';

const LogoutButton = () => {
  const handleLogout = () => {
    store.set('userData', '');
    console.log('Logout');
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
