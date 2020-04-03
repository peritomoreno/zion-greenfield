import React, { useState } from 'react';
import { Card, Row, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RatingStars from '../../RatingStars';
// import Review from '../../../api/review';

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
  reviewID,
  markHelpful,
  markReported
}) => {
  const [showTile, setShowTile] = useState(true);
  const [helpfulToggle, setHelpfulToggle] = useState(false);
  const displayDate = dateFormatter(date);
  // const { markHelpful, markReported } = Review;

  return (
    <div>
      {showTile && (
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
              <span class="text-muted shrinkify">Helpful?</span>
              <Button
                variant="light"
                size="sm"
                onClick={() => {
                  setHelpfulToggle(true);
                  if (!helpfulToggle) {
                    markHelpful(reviewID);
                  }
                }}
              >
                Yes ({helpful + Number(helpfulToggle)})
              </Button>
              <Button
                variant="light"
                size="sm"
                onClick={() => {
                  setShowTile(false);
                  markReported(reviewID);
                }}
              >
                Report
              </Button>
            </Card.Footer>
          </Card>
        </Row>
      )}
    </div>
  );
};

export default ReviewTile;
