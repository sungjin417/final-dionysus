// src/components/JjimButton.js
import React, { useState } from 'react';
import api from '../services/api';

function JjimButton({ alcoholName }) {
  const [jjimmed, setJjimmed] = useState(false);

  const handleClick = async () => {
    try {
      await api.post('/alcohol/jjim', { alcoholName });
      setJjimmed(!jjimmed);
    } catch (error) {
      console.error('Error toggling jjim:', error);
    }
  };

  return (
    <div className="jjim-button">
      <button onClick={handleClick}>{jjimmed ? '찜 취소' : '찜하기'}</button>
    </div>
  );
}

export default JjimButton;
