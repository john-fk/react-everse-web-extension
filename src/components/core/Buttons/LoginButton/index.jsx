import React from 'react';
import { Button } from 'antd';

import './LoginButton.scss';

const LoginButton = () => {
  return (
    <>
      <button onClick={() => console.log('Login')} className="login-button">
        Sign in
      </button>
    </>
  );
};

export default LoginButton;
