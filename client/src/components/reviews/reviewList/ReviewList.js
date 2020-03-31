import React from 'react';
import ReviewTile from './ReviewTile';

const ReviewList = ({ reviewList }) => {
  console.log(reviewList);
  return (
    <div data-testid="reviews">
      <h2>
        {reviewList.length} reviews, sorted by{' '}
        <select>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
          <option value="relevance">Relevance</option>
        </select>
      </h2>
      <div className="reviews">
        {reviewList.map((review) => (
          <ReviewTile
            key={review.review_id}
            summary={review.summary}
            body={review.body}
            reviewerName={review.reviewer_name}
            date={review.date}
            rating={review.rating}
            helpful={review.helpfulness}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
