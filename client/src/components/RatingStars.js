import React from 'react';
import '../styles/RatingStars.css';

const RatingStars = ({ rating }) => {
  const ratingPercentage = `${Math.floor(
    (Number(rating) / 5) * 100
  ).toString()}%`;
  const styles = {
    width: ratingPercentage
  };

  return (
    <span data-classid="ratingStars">
      <span className="stars-outer">
        <span className="stars-inner" style={styles} />
      </span>
    </span>
  );
};

export default RatingStars;
