import React from 'react';
import { Card, Row, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RatingStars from '../../RatingStars';
import Review from '../../../api/review';

const dateFormatter = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const ReviewTile = ({
  summary,
  body,
  reviewerName,
  date,
  rating,
  helpful,
  reviewID
}) => {
  const displayDate = dateFormatter(date);
  const { markHelpful, markReported } = Review;

  return (
    <Row md={1} className="review-tile-row">
      <Card border="light" className="review-tile">
        <Card.Header>
          <span className="card-rating-stars">
            <RatingStars rating={rating} />
          </span>
          <span className="card-review-name-date">
            <strong>{reviewerName}</strong>, {displayDate}
          </span>
        </Card.Header>
        <Card.Body>
          <Card.Title>{summary}</Card.Title>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
        <Card.Footer>
          Helpful?
          <Button onClick={() => markHelpful(reviewID)}>Yes ({helpful})</Button>
          <Button onClick={() => markReported(reviewID)}>Report</Button>
        </Card.Footer>
      </Card>
    </Row>
  );
};

export default ReviewTile;
