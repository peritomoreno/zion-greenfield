import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import RatingStars from '../../RatingStars';

const YourOutfitEntry = ({
  category,
  name,
  price,
  image,
  productId,
  rating,
  deleteOutfitHandler
}) => {
  const imageStyle = {
    width: '100%',
    height: '295px',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div data-testid="your-outfit-entry" className="related-card">
      <button
        type="button"
        className="related-button your-outfit-button"
        onClick={() => deleteOutfitHandler(productId)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>

      <Link to={`/product/${productId}`} style={{ textDecoration: 'none' }}>
        <div className="related-router">
          <div className="related-image-container">
            <div style={imageStyle} />
          </div>
          <div className="related-product-info">
            <p className="related-category">{category}</p>
            <p className="related-name">{name}</p>
            <p className="related-price">${price}</p>
            <RatingStars rating={rating} />
          </div>
        </div>
      </Link>

    </div>
  );
};

export default YourOutfitEntry;
