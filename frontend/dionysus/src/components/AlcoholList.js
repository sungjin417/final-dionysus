// AlcoholList.js
import React, { useState, useEffect } from "react";
import { fetchAlcohols, searchAlcohols, addReview, fetchReviews } from "../services/api";
import SortOptions from "./SortOptions";
import Review from "./Review";

const AlcoholList = ({ category }) => {
  const [alcohols, setAlcohols] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const search = async () => {
      try {
        let data;
        if (searchTerm.trim() !== "") {
          data = await searchAlcohols(category, searchTerm);
        } else {
          data = await fetchAlcohols(category, sortBy);
        }
        setAlcohols(data);
      } catch (error) {
        console.error("Failed to fetch alcohols:", error);
      }
    };

    search();
  }, [category, sortBy, searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="검색"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SortOptions sortBy={sortBy} setSortBy={setSortBy} />
      <ul>
        {alcohols.map((alcohol) => (
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
        ))}
      </ul>
    </div>
  );
};

export default AlcoholList;
