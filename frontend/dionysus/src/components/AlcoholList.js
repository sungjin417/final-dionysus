import React, { useState, useEffect } from 'react';
import api from '../services/api';

function AlcoholList() {
  const [alcoholList, setAlcoholList] = useState([]);

  useEffect(() => {
    fetchAlcoholList();
  }, []);

  const fetchAlcoholList = async () => {
    try {
      const response = await api.get('/alcohol/selectalcohol?name='); // API 호출 주소와 파라미터를 설정해야 합니다.
      setAlcoholList(response.data);
    } catch (error) {
      console.error('Error fetching alcohol list:', error);
    }
  };

  return (
    <div>
      <h2>술 목록</h2>
      <ul>
        {alcoholList.map((alcohol) => (
          <li key={alcohol.alcohol_name}>
            <div>{alcohol.alcohol_name}</div>
            <div>{alcohol.category}</div>
            <div>{alcohol.country_of_origin}</div>
            {/* 술 목록의 다른 정보들을 추가해주세요 */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlcoholList;
