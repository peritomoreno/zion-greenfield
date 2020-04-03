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
import Review from '../../api/review';

import '../../styles/Reviews.css';

const { markReported, markHelpful } = Review;

class ReviewWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      moreReviewsAvailable: true,
      currentlyShowing: 2,
      currentSort: 'relevance',
      starFilter: { 1: false, 2: false, 3: false, 4: false, 5: false }
    };

    this.nextPage = this.nextPage.bind(this);
    this.sortByNewest = this.sortByNewest.bind(this);
    this.sortByHelpful = this.sortByHelpful.bind(this);
    this.sortByRelevance = this.sortByRelevance.bind(this);
    this.setStarFilter = this.setStarFilter.bind(this);
    this.setReviewReported = this.setReviewReported.bind(this);
    this.setReviewHelpful = this.setReviewHelpful.bind(this);
  }

  setStarFilter(rating) {
    const { starFilter } = this.state;
    const showAll = { 1: false, 2: false, 3: false, 4: false, 5: false };
    let updatedFilter;

    updatedFilter = Object.assign(starFilter, {
      [rating]: !starFilter[rating]
    });

    if (
      updatedFilter[1] &&
      updatedFilter[2] &&
      updatedFilter[3] &&
      updatedFilter[4] &&
      updatedFilter[5]
    ) {
      updatedFilter = showAll;
    }

    this.setState({ starFilter: updatedFilter }, () => {
      console.log('starFilter: ', starFilter);
    });
  }

  setReviewHelpful(reviewID) {
    markHelpful(reviewID);
  }

  setReviewReported(reviewID) {
    markReported(reviewID);
  }

  sortByNewest() {
    const { filterNewest, productID } = this.props;

    filterNewest(productID);
    this.setState({ page: 1, currentSort: 'newest' });
  }

  sortByHelpful() {
    const { filterHelpful, productID } = this.props;

    filterHelpful(productID);
    this.setState({ page: 1, currentSort: 'helpful' });
  }

  sortByRelevance() {
    const { filterRelevance, productID } = this.props;

    filterRelevance(productID);
    this.setState({ page: 1, currentSort: 'relevance' });
  }

  nextPage() {
    const { productID, getMoreReviews, currentReviews } = this.props;
    const { page, currentSort, currentlyShowing } = this.state;

    const remainingCachedReviews =
      currentReviews.results.length - currentlyShowing > 2
        ? 2
        : currentReviews.results.length - currentlyShowing;
    const reviewsLeft = !(currentReviews.results.length === currentlyShowing);

    this.setState({
      page: page + 1,
      currentlyShowing: currentlyShowing + remainingCachedReviews,
      moreReviewsAvailable: reviewsLeft
    });

    getMoreReviews(productID, page + 1, currentSort);
  }

  render() {
    const { currentReviews, currentBreakdowns, productID } = this.props;
    const {
      currentSort,
      moreReviewsAvailable,
      page,
      currentlyShowing,
      starFilter
    } = this.state;
    // eslint-disable-next-line react/destructuring-assignment
    const { characteristics, totalReviews } = this.props.currentBreakdowns;

    return (
      <Container data-testid="reviews">
        <Row>
          <Col className="review-breakdowns-sidebar-container" sm={4}>
            <Row className="review-breakdowns-sidebar-title h4 lead">
              Ratings & Reviews
            </Row>
            <Row className="review-breakdowns">
              <RatingsBreakdown
                reviewData={currentBreakdowns}
                setStarFilter={this.setStarFilter}
                starFilter={starFilter}
              />
            </Row>
            <Row className="product-breakdowns">
              <ProductBreakdown productBreakdown={currentBreakdowns} />
            </Row>
          </Col>
          <Col className="review-review-list-container" sm={8}>
            <Row>
              <ReviewList
                reviewList={currentReviews.results}
                currentSort={currentSort}
                newest={this.sortByNewest}
                helpful={this.sortByHelpful}
                relevant={this.sortByRelevance}
                page={page}
                productID={productID}
                nextPage={this.nextPage}
                moreReviewsAvailable={moreReviewsAvailable}
                currentlyShowing={currentlyShowing}
                characteristics={characteristics}
                totalReviews={totalReviews}
                starFilter={starFilter}
                markReported={this.setReviewReported}
                markHelpful={this.setReviewHelpful}
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
