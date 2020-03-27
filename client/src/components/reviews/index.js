import React from 'react';
import ReviewList from './reviewList/ReviewList';
import RatingsBreakdown from './ratingsBreakdown/RatingsBreakdown';
import ProductBreakdown from './productBreakdown/ProductBreakdown';
import data from '../../sampleData/sampleStore';
import '../../styles/Reviews.css';

class ReviewWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
                <RatingsBreakdown reviewData={data.reviewData} />
              </section>
              <section>
                <ProductBreakdown productBreakdown={data.reviewData} />
              </section>
            </td>
            <td>
              <section>
                <ReviewList reviewList={data.reviewData} />
              </section>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default ReviewWidget;
