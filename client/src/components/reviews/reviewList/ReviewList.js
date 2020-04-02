import React from 'react';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import ReviewTile from './ReviewTile';
import Review from '../../../api/review';

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
  const { postReview } = Review;

<<<<<<< HEAD
=======
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';

const ReviewList = ({ reviewList, sortType, moreReviewsAvailable }) => {
>>>>>>> master
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
<<<<<<< HEAD
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
=======
                {sortType}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Helpful</Dropdown.Item>
                <Dropdown.Item>Newest</Dropdown.Item>
                <Dropdown.Item>Relevance</Dropdown.Item>
>>>>>>> master
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
<<<<<<< HEAD
                reviewID={review.review_id}
=======
>>>>>>> master
              />
            ))}

            <Row>
              {moreReviewsAvailable && (
<<<<<<< HEAD
                <Button
                  variant="light"
                  onClick={() => {
                    nextPage(productID, currentSort, page + 1);
                  }}
                >
                  {' '}
                  Load more reviews
                </Button>
              )}{' '}
              <Button
                variant="light"
                onClick={() => {
                  postReview(productID);
                }}
              >
                Submit Review
              </Button>
=======
                <Button variant="light">Load more reviews</Button>
              )}{' '}
              <Button variant="light">Submit Review</Button>
>>>>>>> master
            </Row>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default ReviewList;
