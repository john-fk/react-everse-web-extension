import React from 'react';
import TimeWidget from './components/TimeWidget';
import WeatherWidget from './components/WeatherWidget';
import CovidWidget from './components/CovidWidget';
import FavoritesWidget from './components/FavoritesWidget';
import TasksWidget from './components/TasksWidget';
import QuotesWidget from './components/QuotesWidget';
import GridLayout from 'react-grid-layout';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container-fluid p-0">
      <main className="main">
        <TimeWidget />
        <WeatherWidget />
        <CovidWidget />
        <FavoritesWidget />
        <TasksWidget />
        <QuotesWidget />
        {/* <TimeWidget />
      <WeatherWidget />
      <CovidWidget />
      <FavoritesWidget />
      <TasksWidget />
    <QuotesWidget /> */}
      </main>
    </div>
  );
};

export default App;
