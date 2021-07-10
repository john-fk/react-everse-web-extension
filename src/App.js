import React, { useState, useEffect } from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
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

const ResponsiveGridLayout = WidthProvider(Responsive);

// TODO add recoil atoms here
const App = () => {
  // layout is an array of objects, see the demo for more complete usage
  return (
    <RecoilRoot>
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
            <Card
              childComponent={<CovidWidget />}
              widgetTitle="Covid-19 Update"
            />
          </div>
          <div key="1" data-grid={{ x: 1, y: 0, w: 1, h: 8 }}>
            <Card widgetTitle="Weather" />
          </div>
          <div key="2" data-grid={{ x: 2, y: 0, w: 1, h: 8 }}>
            <Card widgetTitle="Favorites" />
          </div>
          <div key="3" data-grid={{ x: 0, y: 18, w: 2, h: 8 }}>
            <Card widgetTitle="Task Maker" />
          </div>
          <div key="4" data-grid={{ x: 2, y: 2, w: 1, h: 8 }}>
            <Card widgetTitle="Daily Quote" />
          </div>
        </ResponsiveGridLayout>
      </main>
    </RecoilRoot>
  );
};

export default App;
