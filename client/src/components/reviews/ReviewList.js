import React from 'react';
import ReviewTile from './ReviewTile.js';

const ReviewList = ({ reviewList }) => {
  return (
    <div data-testid="reviewList">
      <h2>
        {reviewList.reviewData.length} reviews, sorted by{' '}
        <select>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
          <option value="relevance">Relevance</option>
        </select>
      </h2>
      <table className="reviews">
        <tbody>
          {reviewList.reviewData.map((review) => (
            <tr>
              <ReviewTile key={review.review_id} {...review} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewList;
