import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import ReviewList from './reviewList/ReviewList';
import RatingsBreakdown from './ratingsBreakdown/RatingsBreakdown';
import ProductBreakdown from './productBreakdown/ProductBreakdown';
import {
  filterByNewest,
  filterByHelpful,
  filterByRelevance,
  moreReviews
} from '../../redux/actions/updateReviews';

import '../../styles/Reviews.css';

class ReviewWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moreReviewsAvailable: false,
      sortType: 'newest'
    };
  }

  render() {
    const { currentReviews, currentBreakdowns } = this.props;
    console.log(currentBreakdowns);

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
                sortType={this.state.sortType}
                filters={(filterByNewest, filterByHelpful, filterByRelevance)}
                nextPage={moreReviews}
                moreReviewsAvailable={this.state.moreReviewsAvailable}
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

const mapDispatchToProps = (dispatch) => {
  return {
    filterByNewest: (id) => dispatch(filterByNewest(id)),
    filterByHelpful: (id) => dispatch(filterByHelpful(id)),
    filterByRelevance: (id) => dispatch(filterByRelevance(id)),
    moreReviews: (id, sort, page) => dispatch(moreReviews(id, sort, page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewWidget);
