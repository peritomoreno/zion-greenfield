import React from 'react';
import RatingStars from '../../RatingStars';
import { Container, Row, Col, Button } from 'react-bootstrap';

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
    <div className="card review-tile">
      <div className="card-header">
        <span className="card-rating-stars">
          <RatingStars rating={rating} />
        </span>{' '}
        <span className="card-review-name-date">
          {' '}
          <strong>{reviewerName}</strong>, {displayDate}
        </span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{summary}</h5>
        <p className="card-text">{body}</p>
      </div>
      <div class="card-footer text-muted">
        {' '}
        Helpful?{' '}
        <a href="#" className="btn btn-link">
          Yes ({helpful})
        </a>{' '}
        |{' '}
        <a href="#" className="btn btn-link">
          Report
        </a>
      </div>
    </div>
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
