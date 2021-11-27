import React from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider, QueryClient } from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './components/layout';

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
        <AppLayout />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
