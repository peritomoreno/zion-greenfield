import React from 'react';
import ReviewList from './ReviewList.js';
import RatingsBreakdown from './RatingsBreakdown.js';
import ProductBreakdown from './ProductBreakdown.js';

const ReviewWidget = (reviewData) => (
  <div data-testid="reviews">
    Reviews Components
    <section>
      <ReviewList reviewList={reviewData} />
    </section>
    <section>
      <RatingsBreakdown />
    </section>
    <section>
      <ProductBreakdown />
    </section>
  </div>
);

export default ReviewWidget;
