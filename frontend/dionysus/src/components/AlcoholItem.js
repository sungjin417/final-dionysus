// AlcoholItem.js
import React from 'react';
import Review from './Review';

const AlcoholItem = ({ alcohol }) => {
  return (
    <li key={alcohol.alcohol_name}>
      <h2>{alcohol.alcohol_name}</h2>
      <p>Category: {alcohol.category}</p>
      <p>Country of Origin: {alcohol.country_of_origin}</p>
      <p>Company: {alcohol.com}</p>
      <p>ABV: {alcohol.abv}%</p>
      <p>Volume: {alcohol.volume}ml</p>
      <p>Price: {alcohol.price} KRW</p>
      <p>Tags: {alcohol.tag}</p>
      <Review alcoholName={alcohol.alcohol_name} />
    </li>
  );
};

export default AlcoholItem;
