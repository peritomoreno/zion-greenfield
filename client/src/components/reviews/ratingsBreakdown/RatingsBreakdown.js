import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import RatingStars from '../../RatingStars';

const RatingsBreakdown = ({ reviewData, setStarFilter }) => {
  return (
    <Container
      data-testid="ratingsBreakdown"
      className="review-ratings-breakdown"
    >
      <Row>
        <Col className="review-ratings-overall-rating display-4">
          {reviewData.productRating}
        </Col>
        <Col className="review-ratings-overall-stars">
          <RatingStars rating={reviewData.productRating} />
        </Col>
      </Row>
      <Row>
        <span className="text-muted recommend-percentage">
          {reviewData.recommendPercentage}% of reviewers recommended this
          product.
        </span>
      </Row>
      <Row className="review-ratings-bars text-muted">
        <Col>
          <Row>
            <Col className="review-ratings-bars-label"> 5 Stars </Col>
            <Col className="review-ratings-bar" md={8}>
              <ProgressBar now={reviewData.fiveStars} />
            </Col>
          </Row>
          <Row
            onClick={() => {
              setStarFilter(4);
            }}
          >
            <Col className="review-ratings-bars-label">4 Stars </Col>
            <Col className="review-ratings-bar" md={8}>
              <ProgressBar now={reviewData.fourStars} />
            </Col>
          </Row>
          <Row
            onClick={() => {
              setStarFilter(3);
            }}
          >
            <Col className="review-ratings-bars-label">3 Stars </Col>
            <Col className="review-ratings-bar" md={8}>
              <ProgressBar now={reviewData.threeStars} />
            </Col>
          </Row>
          <Row
            onClick={() => {
              setStarFilter(2);
            }}
          >
            <Col className="review-ratings-bars-label">2 Stars </Col>
            <Col className="review-ratings-bar" md={8}>
              <ProgressBar now={reviewData.twoStars} />
            </Col>
          </Row>
          <Row
            onClick={() => {
              setStarFilter(1);
            }}
          >
            <Col className="review-ratings-bars-label">1 Stars </Col>
            <Col className="review-ratings-bar" md={8}>
              <ProgressBar now={reviewData.oneStar} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default RatingsBreakdown;
