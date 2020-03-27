import React from 'react';
import ReviewList from './ReviewList';
import RatingsBreakdown from './RatingsBreakdown';
import ProductBreakdown from './ProductBreakdown';
import data from '../../sampleData/sampleStore';

class ReviewWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div data-testid="reviews">
        Reviews Components
        <section>
          <ReviewList reviewList={data.reviewData} />
        </section>
        <section>
          <RatingsBreakdown reviewData={data.reviewData} />
        </section>
        <section>
          <ProductBreakdown productBreakdown={data.reviewData} />
        </section>
      </div>
    );
  }
}

export default ReviewWidget;
