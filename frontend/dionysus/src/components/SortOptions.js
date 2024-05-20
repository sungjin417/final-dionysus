// SortOptions.js
import React from 'react';

const SortOptions = ({ sortBy, setSortBy }) => {
  return (
    <div>
      <label>Sort by: </label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Select</option>
        <option value="price">Price</option>
        <option value="abv">ABV</option>
        <option value="volume">Volume</option>
      </select>
    </div>
  );
};

export default SortOptions;
