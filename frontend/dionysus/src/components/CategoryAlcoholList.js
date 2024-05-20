// src/components/CategoryAlcoholList.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import Rating from './Rating';
import Review from './Review';

function CategoryAlcoholList() {
  const [categoryAlcoholList, setCategoryAlcoholList] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const { category, subcategory } = useParams();

  useEffect(() => {
    fetchCategoryAlcoholList();
    setCategoryName(subcategory ? `${subcategory} ${category}` : category);
  }, [category, subcategory]);

  const fetchCategoryAlcoholList = async () => {
    try {
      const response = await api.get(`/alcohol/category/${category}?subcategory=${subcategory}`);
      setCategoryAlcoholList(response.data);
    } catch (error) {
      console.error(`Error fetching alcohol list for category ${category} and subcategory ${subcategory}:`, error);
    }
  };

  return (
    <div>
      <h2>{categoryName} 리스트</h2>
      <ul>
        {categoryAlcoholList.map((alcohol) => (
          <li key={alcohol.alcohol_name}>
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

export default CategoryAlcoholList;
