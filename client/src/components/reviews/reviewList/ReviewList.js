import React from 'react';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';

import ReviewTile from './ReviewTile';

const ReviewList = ({
  reviewList,
  filterReviews,
  moreReviews,
  sortType,
  moreReviewsAvailable
}) => {
  return (
    <Container data-testid="reviews">
      <Col>
        <Row>
          <Col>
            <h2>{reviewList.length} reviews, sorted by </h2>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {sortType}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onChange={filterReviews('helpful')}>
                  Helpful
                </Dropdown.Item>
                <Dropdown.Item onChange={filterReviews('newest')}>
                  Newest
                </Dropdown.Item>
                <Dropdown.Item onChange={filterReviews('relevance')}>
                  Relevance
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row className="reviews">
          <Col>
            {reviewList.map((review) => (
              <ReviewTile
                key={review.review_id}
                summary={review.summary}
                body={review.body}
                reviewerName={review.reviewer_name}
                date={review.date}
                rating={review.rating}
                helpful={review.helpfulness}
              />
            ))}

            <Row>
              {moreReviewsAvailable && (
                <Button variant="light" onClick={moreReviews}>
                  Load more reviews
                </Button>
              )}{' '}
              <Button variant="light">Submit Review</Button>
            </Row>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default ReviewList;
