import React from 'react';
import '../styles/RatingStars.css';

const RatingStars = ({ rating }) => {
  const ratingPercentage = `${Math.floor(
    (Number(rating) / 5) * 100
  ).toString()}%`;
  const styles = {
    width: ratingPercentage
  };

  return (
    <div data-classid="ratingStars">
      <table>
        <tbody>
          <tr className="ratingStars">
            <td>
              <div className="stars-outer">
                <div className="stars-inner" style={styles} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RatingStars;
