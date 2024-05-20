import React from 'react';
import AlcoholList from '../components/AlcoholList';
import SearchBar from '../components/SearchBar';

function Home() {
  return (
    <div>
      <h1>홈 페이지</h1>
      <SearchBar />
      <AlcoholList />
    </div>
  );
}

export default Home;
