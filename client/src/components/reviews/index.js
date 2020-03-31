import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';

import ReviewList from './reviewList/ReviewList';
import RatingsBreakdown from './ratingsBreakdown/RatingsBreakdown';
import ProductBreakdown from './productBreakdown/ProductBreakdown';

import '../../styles/Reviews.css';

class ReviewWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { currentReviews, currentBreakdowns } = this.props;
    console.log(currentBreakdowns);

    return (
      <div data-testid="reviews">
        <div className="review-breakdowns-sidebar-container">
          <div className="review-breakdowns-sidebar-title h4 lead">
            Ratings & Reviews
          </div>
          <div className="review-breakdowns">
            <RatingsBreakdown reviewData={currentBreakdowns} />
          </div>
          <div className="product-breakdowns">
            <ProductBreakdown productBreakdown={currentBreakdowns} />
          </div>
        </div>
        <div className="review-review-list-container">
          <div>
            <ReviewList reviewList={currentReviews.results} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentReviews: state.currentReviews,
    currentBreakdowns: state.currentBreakdowns
  };
};

export default connect(mapStateToProps)(ReviewWidget);
