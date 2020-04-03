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
  markReported,
  recommend,
  response
}) => {
  const longReview = body.length > 249;

  const [showTile, setShowTile] = useState(true);
  const [helpfulToggle, setHelpfulToggle] = useState(false);
  const [showFullReview, showFullReviewToggle] = useState(!longReview);
  const shortenedReview = (
    <div>
      <Card.Text>{`${body.slice(0, 246)}...`};</Card.Text>
      <Button
        variant="light light-outline"
        size="sm"
        onClick={() => {
          showFullReviewToggle(true);
        }}
      >
        show more
      </Button>
    </div>
  );
  const fullReview = (
    <div>
      <Card.Text>{body}</Card.Text>
      {longReview && (
        <Button
          variant="light light-outline"
          size="sm"
          onClick={() => {
            showFullReviewToggle(false);
          }}
        >
          show less
        </Button>
      )}
    </div>
  );
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
              <Card.Text>
                {showFullReview || !longReview ? fullReview : shortenedReview}
                {recommend && (
                  <div className="recommend-checkmark">
                    <strong>✔ I recommend this product</strong>
                  </div>
                )}
                {!(response === 'null' || response === null) && (
                  <div className="seller-response">
                    <strong>Response:</strong>
                    <br />
                    {response}
                  </div>
                )}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <span className="text-muted shrinkify">Helpful?</span>
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
