import React from 'react';
import { Container, Row, Col, ProgressBar, Button } from 'react-bootstrap';
import RatingStars from '../../RatingStars';

const RatingsBreakdown = ({ reviewData, setStarFilter, starFilter }) => {
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
            <Col className="review-ratings-bars-label">
              <Button
                variant="light outline-light"
                active={starFilter[5]}
                size="sm"
                onClick={() => {
                  setStarFilter(5);
                }}
              >
                5 Stars
              </Button>
            </Col>
            <Col className="review-ratings-bar" md={8}>
              <ProgressBar now={reviewData.fiveStars} />
            </Col>
          </Row>
          <Row>
            <Col className="review-ratings-bars-label">
              <Button
                variant="light outline-light"
                active={starFilter[4]}
                size="sm"
                onClick={() => {
                  setStarFilter(4);
                }}
              >
                4 Stars
              </Button>
            </Col>
            <Col className="review-ratings-bar" md={8}>
              <ProgressBar now={reviewData.fourStars} />
            </Col>
          </Row>
          <Row>
            <Col className="review-ratings-bars-label">
              <Button
                variant="light outline-light"
                active={starFilter[3]}
                size="sm"
                onClick={() => {
                  setStarFilter(3);
                }}
              >
                3 Stars
              </Button>
            </Col>
            <Col className="review-ratings-bar" md={8}>
              <ProgressBar now={reviewData.threeStars} />
            </Col>
          </Row>
          <Row>
            <Col className="review-ratings-bars-label">
              <Button
                variant="light outline-light"
                active={starFilter[2]}
                size="sm"
                onClick={() => {
                  setStarFilter(2);
                }}
              >
                2 Stars
              </Button>
            </Col>
            <Col className="review-ratings-bar" md={8}>
              <ProgressBar now={reviewData.twoStars} />
            </Col>
          </Row>
          <Row>
            <Col className="review-ratings-bars-label">
              <Button
                variant="light outline-light"
                active={starFilter[1]}
                size="sm"
                onClick={() => {
                  setStarFilter(1);
                }}
              >
                1 Stars
              </Button>
            </Col>
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
