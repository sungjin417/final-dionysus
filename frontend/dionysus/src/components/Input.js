// Input.js
import React from 'react';

const Input = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="검색"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default Input;
