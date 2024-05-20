// src/components/Review.js
import React, { useState } from 'react';
import api from '../services/api';

function Review({ review }) {
  const [userReview, setUserReview] = useState(review);
  const [editing, setEditing] = useState(false);
  const [newReview, setNewReview] = useState('');

  const handleEdit = () => {
    setNewReview(userReview);
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await api.post('/alcohol/review', { review: newReview });
      setUserReview(newReview);
      setEditing(false);
    } catch (error) {
      console.error('Error updating review:', error);
    }
  };

  return (
    <div className="review">
      {!editing ? (
        <div>
          <span>{userReview}</span>
          <button onClick={handleEdit}>수정</button>
        </div>
      ) : (
        <div>
          <textarea value={newReview} onChange={handleChange} />
          <button onClick={handleSubmit}>저장</button>
          <button onClick={handleCancel}>취소</button>
        </div>
      )}
    </div>
  );
}

export default Review;
