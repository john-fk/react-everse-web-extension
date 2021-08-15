import React, { useState, useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider, QueryClient } from 'react-query';
import CalendarWidget from './components/CalendarWidget';
import GreetingWidget from './components/GreetingWidget';
import WeatherWidget from './components/WeatherWidget';
import CovidWidget from './components/CovidWidget';
import FavoritesWidget from './components/FavoritesWidget';
import TasksWidget from './components/TasksWidget';
import QuotesWidget from './components/QuotesWidget';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/UI/Card';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SubHeading } from './components/UI/Heading';
const ResponsiveGridLayout = WidthProvider(Responsive);

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
        <main className="main ">
          <div className="d-flex px-5 py-3 align-items-center justify-content-between">
            <GreetingWidget />
            <CalendarWidget />
          </div>
          <ResponsiveGridLayout
            className="layout"
            margin={[20, 20]}
            containerPadding={[50, 20]}
            autoSize={true}
            verticalCompact={true}
            rowHeight={25}
            cols={{ lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 360 }}
            isResizable={false}
            useCSSTransforms={false}
            isBounded={true}
          >
            <div key="0" data-grid={{ x: 0, y: 0, w: 1, h: 8 }}>
              <Card widgetTitle="Covid Scanner" widget={<CovidWidget />} />
            </div>
            <div key="1" data-grid={{ x: 1, y: 0, w: 1, h: 8 }}>
              <Card widgetTitle="Weather" widget={<WeatherWidget />} />
            </div>
            <div key="2" data-grid={{ x: 2, y: 0, w: 1, h: 8 }}>
              <Card widgetTitle="Favorites" widget={<FavoritesWidget />} />
            </div>
            <div key="3" data-grid={{ x: 0, y: 18, w: 2, h: 8 }}>
              <Card widgetTitle="Task Maker" widget={<TasksWidget />} />
            </div>
            <div key="4" data-grid={{ x: 2, y: 2, w: 1, h: 8 }}>
              <Card widgetTitle="Daily Quote" widget={<QuotesWidget />} />
            </div>
          </ResponsiveGridLayout>
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
