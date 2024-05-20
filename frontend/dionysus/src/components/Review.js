// Review.js

import React, { useState, useEffect } from "react";
import { fetchReviews, addReview, deleteReview } from "../services/api";

const Review = ({ alcoholName }) => {
  const [reviews, setReviews] = useState([]);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [newReview, setNewReview] = useState("");

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        const reviewsData = await fetchReviews(alcoholName);
        setReviews(reviewsData);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviewsData();
  }, [alcoholName]);

  const handleToggleReviews = () => {
    setShowAllReviews(!showAllReviews);
  };

  const fetchReviewsData = async () => {
    try {
      const reviewsData = await fetchReviews(alcoholName);
      setReviews(reviewsData);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
    }
  };

  const handleAddReview = async () => {
    try {
      await addReview(alcoholName, newReview);
      setNewReview(""); // 리뷰 추가 후 상태 초기화
      fetchReviewsData(); // 리뷰 추가 후 다시 리뷰 목록을 가져옴
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      await deleteReview(reviewId);
      fetchReviewsData(); // 리뷰 삭제 후 다시 리뷰 목록을 가져옴
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div>
      <h3>리뷰</h3>
      {reviews.length === 0 ? (
        <p>리뷰 없음</p>
      ) : (
        <>
          <div>
            <p>{reviews[0].review}</p>
          </div>
          {reviews.length > 1 && !showAllReviews && (
            <button onClick={handleToggleReviews}>더보기</button>
          )}
          {showAllReviews &&
            reviews.map((review, index) => (
              <div key={index}>
                <p>{review.review}</p>
                <button onClick={() => handleDeleteReview(review.id)}>삭제</button>
              </div>
            ))}
        </>
      )}
      <div>
        <input
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="리뷰를 입력하세요"
        />
        <button onClick={handleAddReview}>리뷰 추가</button>
      </div>
    </div>
  );
};

export default Review;
