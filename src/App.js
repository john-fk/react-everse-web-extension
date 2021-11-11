import React from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import GridListWidget from './components/GridListWidget';
import Header from './components/Header';
import { Auth0Provider } from '@auth0/auth0-react';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
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
    <Auth0Provider
      domain={`${process.env.AUTH0_DOMAIN}`}
      clientId={`${process.env.AUTH0_CLIENT_ID}`}
      redirectUri={window.location.origin}
    >
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <main className="main">
            <Header />
            <GridListWidget />
          </main>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </RecoilRoot>
    </Auth0Provider>
  );
};

export default App;
