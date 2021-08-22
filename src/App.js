import React from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import GridListWidget from './components/GridListWidget';
import Header from './components/Header';

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
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <main className="main">
          <Header />
          <GridListWidget />
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
