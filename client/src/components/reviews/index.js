import React from 'react';
import ReviewList from './ReviewList';
import RatingsBreakdown from './RatingsBreakdown';
import ProductBreakdown from './ProductBreakdown';

const ReviewWidget = ({ sampleStore }) => (
  <div data-testid="reviews">
    Reviews Components
    <section>
      <ReviewList reviewList={sampleStore.reviewData} />
    </section>
    <section>
      <RatingsBreakdown reviewData={sampleStore.reviewData} />
    </section>
    <section>
      <ProductBreakdown productBreakdown={sampleStore.reviewData} />
    </section>
  </div>
);

export default ReviewWidget;
