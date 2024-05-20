// src/components/PopularAlcoholList.js
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import Rating from './Rating';
import Review from './Review';

function PopularAlcoholList() {
  const [popularAlcoholList, setPopularAlcoholList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchPopularAlcoholList();
  }, []);

  const fetchPopularAlcoholList = async () => {
    try {
      const response = await api.get('/popular/alcohol');
      setPopularAlcoholList(response.data);
    } catch (error) {
      console.error('Error fetching popular alcohol list:', error);
    }
  };

  const handleAlcoholClick = (alcoholName) => {
    history.push(`/alcohol/${alcoholName}`);
  };

  return (
    <div>
      <h2>인기 리스트</h2>
      <ul>
        {popularAlcoholList.map((alcohol) => (
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

export default PopularAlcoholList;
