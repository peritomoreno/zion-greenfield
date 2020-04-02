import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { Container, Row, Col } from 'react-bootstrap';
=======
import { Container, Row, Col, Button } from 'react-bootstrap';
>>>>>>> master

import ReviewList from './reviewList/ReviewList';
import RatingsBreakdown from './ratingsBreakdown/RatingsBreakdown';
import ProductBreakdown from './productBreakdown/ProductBreakdown';
<<<<<<< HEAD
import {
  filterByNewest,
  filterByHelpful,
  filterByRelevance,
  moreReviews
} from '../../redux/actions/updateReviews';
=======
>>>>>>> master

import '../../styles/Reviews.css';

class ReviewWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
<<<<<<< HEAD
      page: 1,
      moreReviewsAvailable: true,
      currentSort: 'newest'
    };

    this.nextPage = this.nextPage.bind(this);
    this.sortByNewest = this.sortByNewest.bind(this);
    this.sortByHelpful = this.sortByHelpful.bind(this);
    this.sortByRelevance = this.sortByRelevance.bind(this);
  }

  nextPage() {
    const { productID, getMoreReviews } = this.props;
    const { page, currentSort } = this.state;

    this.setState({ page: page + 1 });

    getMoreReviews(productID, page + 1, currentSort);
  }

  sortByNewest() {
    const { filterNewest, productID } = this.props;

    this.setState({ page: 1, currentSort: 'newest' });
    filterNewest(productID);
  }

  sortByHelpful() {
    const { filterHelpful, productID } = this.props;

    this.setState({ page: 1, currentSort: 'helpful' });
    filterHelpful(productID);
  }

  sortByRelevance() {
    const { filterRelevance, productID } = this.props;

    this.setState({ page: 1, currentSort: 'relevance' });
    filterRelevance(productID);
  }

  render() {
    const { currentReviews, currentBreakdowns, productID } = this.props;
    const { currentSort, moreReviewsAvailable, page } = this.state;
=======
      moreReviewsAvailable: false,
      sortType: 'newest'
    };
  }

  render() {
    const { currentReviews, currentBreakdowns } = this.props;
    console.log(currentBreakdowns);
>>>>>>> master

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
<<<<<<< HEAD
                currentSort={currentSort}
                newest={this.sortByNewest}
                helpful={this.sortByHelpful}
                relevant={this.sortByRelevance}
                page={page}
                productID={productID}
                nextPage={this.nextPage}
                moreReviewsAvailable={moreReviewsAvailable}
=======
                sortType={this.state.sortType}
                moreReviewsAvailable={this.state.moreReviewsAvailable}
>>>>>>> master
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
    filterNewest: (id) => dispatch(filterByNewest(id)),
    filterHelpful: (id) => dispatch(filterByHelpful(id)),
    filterRelevance: (id) => dispatch(filterByRelevance(id)),
    getMoreReviews: (id, page, sort) => dispatch(moreReviews(id, page, sort))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewWidget);
