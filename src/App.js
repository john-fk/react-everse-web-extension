import React, { useState, useEffect } from 'react';
import TimeWidget from './components/TimeWidget';
import WeatherWidget from './components/WeatherWidget';
import CovidWidget from './components/CovidWidget';
import FavoritesWidget from './components/FavoritesWidget';
import TasksWidget from './components/TasksWidget';
import QuotesWidget from './components/QuotesWidget';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

const App = () => {
  // layout is an array of objects, see the demo for more complete usage

  const widgetComponents = [
    <TimeWidget />,
    <WeatherWidget />,
    <CovidWidget />,
    <FavoritesWidget />,
    <TasksWidget />,
    <QuotesWidget />,
  ];
  const componentsLayout = () => {
    return [
      { i: '0', x: 0, y: 0, w: 2, h: 2 },
      { i: '1', x: 1, y: 1, w: 5, h: 5 },
      { i: '2', x: 2, y: 2, w: 3, h: 5 },
      { i: '3', x: 3, y: 3, w: 3, h: 5 },
      { i: '4', x: 4, y: 4, w: 3, h: 5 },
      { i: '5', x: 5, y: 5, w: 3, h: 5 },
    ];
  };
  const layout = componentsLayout();

  return (
    <div>
      <main className="main">
        <ResponsiveGridLayout
          className="layout"
          layout={layout}
          margin={[10, 10]}
          containerPadding={[0, 0]}
          autoSize={true}
          verticalCompact={true}
          rowHeight={28}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        >
          {/* {widgetComponents.map((item, idx) => (
            <div
              key={idx}
              data-grid={{ w: 3, h: 5, x: 0, y: 0, minW: 3, minH: 5 }}
            >
              {item}
              {console.log(idx)}
            </div>
          ))} */}

          <div key="0" data-grid={{ x: 0, y: 0, w: 3, h: 5, minW: 3, minH: 5 }}>
            <TimeWidget />
          </div>

          <div key="1" data-grid={{ x: 3, y: 0, w: 3, h: 5, minW: 3, minH: 5 }}>
            <WeatherWidget />
          </div>
          <div key="2" data-grid={{ x: 0, y: 5, w: 3, h: 5, minW: 3, minH: 5 }}>
            <CovidWidget />
          </div>
          <div key="3" data-grid={{ x: 3, y: 5, w: 3, h: 5, minW: 3, minH: 5 }}>
            <FavoritesWidget />
          </div>
          <div
            key="4"
            data-grid={{ x: 0, y: 10, w: 6, h: 5, minW: 6, minH: 5 }}
          >
            <TasksWidget />
          </div>
          <div
            key="5"
            data-grid={{ x: 6, y: 0, w: 6, h: 15, minW: 6, minH: 8 }}
          >
            <QuotesWidget />
          </div>
        </ResponsiveGridLayout>
      </main>
    </div>
  );
};

export default App;
