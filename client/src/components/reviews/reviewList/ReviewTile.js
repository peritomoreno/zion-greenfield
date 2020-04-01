import React from 'react';
import RatingStars from '../../RatingStars';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const dateFormatter = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const ReviewTile = ({ summary, body, reviewerName, date, rating, helpful }) => {
  const displayDate = dateFormatter(date);

  return (
    <Row>
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
          <small className="text-muted">
            Helpful?
            <a href="#" className="btn btn-link">
              Yes ({helpful})
            </a>
            <a href="#" className="btn btn-link">
              Report
            </a>
          </small>
        </Card.Footer>
      </Card>
    </Row>
  );
};

export default ReviewTile;

/*
<td className="review-card" data-testid="reviewTile">
      <p>{summary}</p>
      <p>{body}</p>
      <p>{reviewerName}</p>
      <p>{date}</p>
    </td>

*/
