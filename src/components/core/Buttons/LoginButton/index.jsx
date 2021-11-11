import React from 'react';
import { Button } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import './LoginButton.scss';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <button onClick={() => loginWithRedirect()} className="login-button">
        Sign in
      </button>
    </>
  );
};

export default LoginButton;
