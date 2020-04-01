import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';

import ReviewList from './reviewList/ReviewList';
import RatingsBreakdown from './ratingsBreakdown/RatingsBreakdown';
import ProductBreakdown from './productBreakdown/ProductBreakdown';
import updateReviews from '../../redux/actions/updateReviews';

import '../../styles/Reviews.css';

class ReviewWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moreReviewsAvailable: false,
      sortType: 'newest',
      currentPage: 1
    };

    this.filterReviews = this.filterReviews.bind(this);
    this.moreReviews = this.filterReviews.bind(this);
  }

  filterReviews(sort) {
    this.setState({ sortType: sort }).then(() => {
      const { productID, sortType } = this.state;
      updateReviews(productID, sortType, '1');
    });
  }

  moreReviews() {
    const { currentPage } = this.state;

    this.setState({ currentPage: currentPage + 1 }).then(() => {
      const { productID, sortType } = this.state;
      updateReviews(productID, sortType, currentPage);
    });
  }

  render() {
    const { currentReviews, currentBreakdowns } = this.props;
    const { sortType, moreReviewsAvailable } = this.state;

    return (
      <Container data-testid="reviews">
        <Row>
          <Col className="review-breakdowns-sidebar-container" sm={4}>
            <Row className="review-breakdowns-sidebar-title h4 lead">
              Ratings & Reviews
            </Row>
            <Row className="review-breakdowns">
              <RatingsBreakdown reviewData={currentBreakdowns} />
            </Row>
            <Row className="product-breakdowns">
              <ProductBreakdown productBreakdown={currentBreakdowns} />
            </Row>
          </Col>
          <Col className="review-review-list-container" sm={8}>
            <Row>
              <ReviewList
                reviewList={currentReviews.results}
                sortType={sortType}
                filterReviews={this.filterReviews}
                moreReviews={this.moreReviews}
                moreReviewsAvailable={moreReviewsAvailable}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentReviews: state.currentReviews,
    currentBreakdowns: state.currentBreakdowns,
    productID: state.currentProduct.id
  };
};

export default connect(mapStateToProps)(ReviewWidget);
