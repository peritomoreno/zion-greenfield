import React from 'react';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import ReviewTile from './ReviewTile';

const ReviewList = ({
  reviewList,
  currentSort,
  newest,
  helpful,
  relevant,
  nextPage,
  moreReviewsAvailable,
  page,
  productID
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
                {currentSort}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onSelect={() => {
                    newest();
                  }}
                >
                  Newest
                </Dropdown.Item>
                <Dropdown.Item
                  onSelect={() => {
                    helpful();
                  }}
                >
                  Helpful
                </Dropdown.Item>
                <Dropdown.Item
                  onSelect={() => {
                    relevant();
                  }}
                >
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
                <Button
                  variant="light"
                  onClick={nextPage(productID, currentSort, page + 1)}
                >
                  {' '}
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
