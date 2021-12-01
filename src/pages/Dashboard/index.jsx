import React from 'react';
import GridListWidget from '../../components/GridListWidget';
import Header from '../../components/Header';

const Dashboard = () => {
  return (
    <>
      <main className="main">
        <Header />
        <GridListWidget />
      </main>
    </>
  );
};

export default Dashboard;
