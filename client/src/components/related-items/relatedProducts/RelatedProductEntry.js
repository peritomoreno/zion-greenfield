import React, { useState } from 'react';
import { connect } from 'react-redux';
import ComparisonModal from '../comparisonModal/ComparisonModal';
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
        results = style.results[0].photos[0].thumbnail_url;
      }
    });
    return results;
  };

  const [isCompareClicked, toggleCompare] = useState(false);

  const { styles } = relatedProducts;
  return (
    <div className="col related-card" data-testid="related-product-entry">
      <button
        type="button"
        className="related-button"
        onClick={() => toggleCompare(!isCompareClicked)}
      >
        *
      </button>
      <div className="related-image-container">
        <img src={getImage(styles)} alt="product" className="related-image" />
      </div>
      <div className="related-product-info">
        <p className="related-category">{category}</p>
        <p className="related-name">{name}</p>
        <p className="related-price">${price}</p>
        ⭐⭐⭐⭐⭐
      </div>
      {isCompareClicked ? <ComparisonModal features={features} /> : ''}
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
