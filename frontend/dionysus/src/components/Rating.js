import React from 'react';

function Rating({ score }) {
  return (
    <div>
      <span>별점: {score}점</span>
    </div>
  );
}

export default Rating;
