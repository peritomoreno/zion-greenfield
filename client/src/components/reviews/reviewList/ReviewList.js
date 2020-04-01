import React from 'react';
import ReviewTile from './ReviewTile';

const ReviewList = (reviews) => {
  return (
    <div data-testid="reviews">
      <h2>
        {reviews.length} reviews, sorted by{' '}
        <select>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
          <option value="relevance">Relevance</option>
        </select>
      </h2>
      <table className="reviews">
        <tbody>
          {reviews.reviewList.map((review) => (
            <tr>
              <ReviewTile
                key={review.review_id}
                summary={review.summary}
                body={review.body}
                reviewerName={review.reviewer_name}
                date={review.date}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewList;
