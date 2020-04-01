import React from 'react';
import { connect } from 'react-redux';
import RatingStars from '../../RatingStars';

// TODO: provide navigable link to read all reviews
const ProductRating = ({ rating = 4.5 }) => (
  <div data-testid="productRating">
    <RatingStars rating={rating} /> <a href="">Read all reviews</a>
  </div>
);

// make this work
const mapStateToProps = (state) => ({
  rating: state.currentBreakdowns.productRating
});

export default connect(mapStateToProps)(ProductRating);
