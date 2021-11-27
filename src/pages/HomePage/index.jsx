import React from 'react';
import GridListWidget from '../../components/GridListWidget';
import Header from '../../components/Header';

const Home = () => {
  return (
    <>
      <main className="main">
        <Header />
        <GridListWidget />
      </main>
    </>
  );
};

export default Home;
