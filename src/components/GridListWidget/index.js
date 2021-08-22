import React, { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import WeatherWidget from '../WeatherWidget';
import CovidWidget from '../CovidWidget';
import FavoritesWidget from '../FavoritesWidget';
import TasksWidget from '../TasksWidget';
import QuotesWidget from '../QuotesWidget';
import Card from '../UI/Card';

import './GridListWidget.scss';

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridListWidget = () => {
  const [currentLayout, setCurrentLayout] = useState(0);

  const layout = [
    { i: '0', x: 0, y: 0, w: 1, h: 8 },
    { i: '1', x: 1, y: 0, w: 1, h: 8 },
    { i: '2', x: 2, y: 0, w: 1, h: 8 },
    { i: '3', x: 0, y: 18, w: 2, h: 8 },
    { i: '4', x: 2, y: 2, w: 1, h: 8 },
  ];

  const handleOnWidthChange = (layout) => {
    setCurrentLayout({ currentLayout: layout });
  };

  return (
    <>
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
        isDraggable={false}
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
      ;
    </>
  );
};

export default GridListWidget;
