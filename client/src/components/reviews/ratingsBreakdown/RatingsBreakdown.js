import React from 'react';
import RatingStars from '../../RatingStars';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const RatingsBreakdown = ({ reviewData }) => {
  const ratingsBreakdown = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    ...reviewData.ratings
  };

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
      <Row className="review-ratings-bars text-muted">
        <Col>
          <Row>
            <Col className="review-ratings-bars-label">5 Stars </Col>
            <Col className="review-ratings-bar" md={8}>
              <ProgressBar />
            </Col>
          </Row>
          <Row>
            <Col className="review-ratings-bars-label">4 Stars </Col>
            <Col className="review-ratings-bar" md={8}>
              <ProgressBar />
            </Col>
          </Row>
          <Row>
            <Col className="review-ratings-bars-label">3 Stars </Col>
            <Col className="review-ratings-bar" md={8}>
              <ProgressBar />
            </Col>
          </Row>
          <Row>
            <Col className="review-ratings-bars-label">2 Stars </Col>
            <Col className="review-ratings-bar" md={8}>
              <ProgressBar />
            </Col>
          </Row>
          <Row>
            <Col className="review-ratings-bars-label">1 Stars </Col>
            <Col className="review-ratings-bar" md={8}>
              <ProgressBar />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default RatingsBreakdown;
