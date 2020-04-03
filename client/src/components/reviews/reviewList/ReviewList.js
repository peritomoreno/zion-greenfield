import React from 'react';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import ReviewTile from './ReviewTile';

const ReviewList = ({ reviewList, sortType, moreReviewsAvailable }) => {
  return (
    <Container data-testid="reviews">
      <Col>
        <Row>
          <Col>
            <h2>{reviewList.length} reviews, sorted by </h2>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {sortType}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Helpful</Dropdown.Item>
                <Dropdown.Item>Newest</Dropdown.Item>
                <Dropdown.Item>Relevance</Dropdown.Item>
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
                <Button variant="light">Load more reviews</Button>
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
