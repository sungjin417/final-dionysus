// src/components/AlcoholListPage.js
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import Rating from './Rating';
import Review from './Review';

function AlcoholListPage() {
  const [alcoholList, setAlcoholList] = useState([]);
  const [sortBy, setSortBy] = useState('popular'); // 'popular', 'rating_high_to_low', 'rating_low_to_high', 'review_count'
  const history = useHistory();

  useEffect(() => {
    fetchAlcoholList();
  }, []);

  const fetchAlcoholList = async () => {
    try {
      const response = await api.get(`/alcohol?sortBy=${sortBy}`);
      setAlcoholList(response.data);
    } catch (error) {
      console.error('Error fetching alcohol list:', error);
    }
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleAlcoholClick = (alcoholName) => {
    history.push(`/alcohol/${alcoholName}`);
  };

  return (
    <div>
      <h1>술 리스트</h1>
      <div>
        <label>정렬:</label>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="popular">인기순</option>
          <option value="rating_high_to_low">별점 높은 순</option>
          <option value="rating_low_to_high">별점 낮은 순</option>
          <option value="review_count">리뷰 많은 순</option>
        </select>
      </div>
      <ul>
        {alcoholList.map((alcohol) => (
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

export default AlcoholListPage;
