import React, { useState, useEffect } from 'react';
import Home from '../../pages/HomePage';
import OnBoarding from '../../pages/OnboardingPage';
import { useRecoilValue } from 'recoil';
import { currentUserName } from '../../EverseStates';
import store from 'store';

const AppLayout = () => {
  const [hasBoarded, setHasBoarded] = useState(false);
  const localUserName = store.get('user_name')?.username;
  const appUserName = useRecoilValue(currentUserName);

  useEffect(() => {
    if (localUserName || appUserName) {
      setHasBoarded(true);
    }
  }, [appUserName]);

  return <>{!hasBoarded ? <OnBoarding /> : <Home />}</>;
};

export default AppLayout;
