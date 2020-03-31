import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ComparisonModal from '../comparisonModal/ComparisonModal';
import RatingStars from '../../RatingStars';
import {
  setProductsInfo,
  getRelatedProduct
} from '../../../redux/actions/related';

const RelatedProductsEntry = ({
  category,
  name,
  price,
  productId,
  relatedProducts,
  features
}) => {
  const getImage = (relatedStyles) => {
    let results = null;
    relatedStyles.forEach((style) => {
      if (Number(style.product_id) === productId) {
        if (style.results.length > 0) {
          results = style.results[0].photos[0].url;
        }
      }
    });
    return results;
  };

  const [isCompareClicked, toggleCompare] = useState(false);

  const { styles } = relatedProducts;

  const imageStyle = {
    width: '100%',
    height: '270px',
    backgroundImage: `url(${getImage(styles)})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="related-card" data-testid="related-product-entry">
      <button
        type="button"
        className="related-button"
        onClick={() => toggleCompare(!isCompareClicked)}
      >
        <FontAwesomeIcon icon={faStar} />
      </button>
      <div className="related-image-container">
        <div style={imageStyle} />
      </div>
      <div className="related-product-info">
        <p className="related-category">{category}</p>
        <p className="related-name">{name}</p>
        <p className="related-price">${price}</p>
        <RatingStars rating={5} />
      </div>
      {isCompareClicked ? (
        <ComparisonModal
          features={features}
          name={name}
          toggleCompare={toggleCompare}
        />
      ) : (
        ''
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    relatedProducts: state.relatedProducts,
    currentProduct: state.currentProduct
  };
};

export default connect(mapStateToProps, {
  _setProductsInfo: setProductsInfo,
  _getRelatedProduct: getRelatedProduct
})(RelatedProductsEntry);
