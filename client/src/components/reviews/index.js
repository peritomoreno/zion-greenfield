import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ReviewList from './reviewList/ReviewList';
import RatingsBreakdown from './ratingsBreakdown/RatingsBreakdown';
import ProductBreakdown from './productBreakdown/ProductBreakdown';
import '../../styles/Reviews.css';

class ReviewWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { currentReviews, currentBreakdowns } = this.props;

    return (
      <div data-testid="reviews">
        <table>
          <tr>
            <th>Ratings & Reviews</th>
            <th> </th>
          </tr>
          <tr>
            <td valign="top">
              <section>
                <RatingsBreakdown reviewData={currentBreakdowns} />
              </section>
              <section>
                <ProductBreakdown productBreakdown={currentBreakdowns} />
              </section>
            </td>
            <td>
              <section>
                <ReviewList reviewList={currentReviews.results} />
              </section>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentReviews: state.currentReviews,
    currentBreakdowns: state.currentBreakdowns
  };
};

export default connect(mapStateToProps)(ReviewWidget);
