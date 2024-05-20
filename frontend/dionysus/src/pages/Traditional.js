// src/pages/TraditionalDrinks.js
import React, { useState, useEffect } from 'react';

import api from '../services/api';
import Rating from '../components/Rating';
import Review from '../components/Review';

function TraditionalDrinks() {
  const [traditionalDrinks, setTraditionalDrinks] = useState([]);
  

  useEffect(() => {
    fetchTraditionalDrinks();
  }, []);

  const fetchTraditionalDrinks = async () => {
    try {
      const response = await api.get('/alcohol/category/traditional');
      setTraditionalDrinks(response.data);
    } catch (error) {
      console.error('Error fetching traditional drinks:', error);
    }
  };

  // const handleAlcoholClick = (alcoholName) => {
  //   history.push(`/alcohol/${alcoholName}`);
  // };

  return (
    <div>
      <h2>전통주 리스트</h2>
      <ul>
        {traditionalDrinks.map((alcohol) => (
          <li key={alcohol.alcohol_name} onClick={() => handleAlcoholClick(alcohol.alcohol_name)}>
            <div>{alcohol.alcohol_name}</div>
            <div>{alcohol.category}</div>
            <div>{alcohol.country_of_origin}</div>
            <Rating value={alcohol.average_rating} />
            <Review review={alcohol.review} />
            {/* 기타 술 정보 표시 */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TraditionalDrinks;
