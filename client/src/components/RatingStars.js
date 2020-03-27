import React from 'react';
import '../styles/RatingStars.css';

const RatingStars = ({ rating }) => {
  const ratingPercentage =
    Math.floor((Number(rating) / 5) * 100).toString() + '%';
  console.log(ratingPercentage);
  let styles = {
    width: ratingPercentage
  };

  return (
    <div data-classid="ratingStars">
      <table>
        <tbody>
          <tr class="ratingStars">
            <td>
              <div class="stars-outer">
                <div class="stars-inner" style={styles}></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RatingStars;
