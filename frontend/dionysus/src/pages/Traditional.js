import React from 'react';
import AlcoholList from '../components/AlcoholList';


function Traditional() {
  return (
    <div>
      <h1>전통주 목록</h1>
     
      <AlcoholList category="전통주" />
    </div>
  );
}

export default Traditional;
