import React, { useState, useEffect } from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Header from './components/Header';
import GridListWidget from './components/GridListWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import OnBoarding from './pages/OnboardingPage';
import store from 'store';
// import { currentUserName } from './EverseStates';
// import { fireBase } from './api/firebase';

/*
import store from 'store';
*/

const handleBoarded = (isBoarded) => {
  return (
    <>
      {isBoarded ? (
        <OnBoarding />
      ) : (
        <>
          <Header />
          <GridListWidget />
        </>
      )}
    </>
  );
};

const App = () => {
  const [hasBoarded, setHasBoarded] = useState(false);
  const userBoardedLocal = store.get('has_boarded');

  /*
  ! Danjuma You Stopped here try saving the value with states for to know if the user is boarded or not

  const t = useRecoilValue(currentUserName);
  console.log(t);
 */

  useEffect(() => {
    // check if local is empty if yes run this function`
    if (userBoardedLocal) {
      setHasBoarded(true);
    }
    // if there is nothing in local storage then store use data in local storage
  }, [userBoardedLocal]);

  const queryClient = new QueryClient({
    // Global default setting for react-query
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        cacheTime: 3600000, // TODO Try Caching data for 1 hour before refreshing
      },
    },
  });

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <main className="main">{handleBoarded(hasBoarded)}</main>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
