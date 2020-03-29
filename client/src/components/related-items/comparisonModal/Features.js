import React from 'react';
import { connect } from 'react-redux';

import {
  setProductsInfo,
  getRelatedProduct
} from '../../../redux/actions/related';

const Features = ({ feature }) => {
  return (
    <div data-testid="features" className="row related-features">
      <span className="col related-current-check">
        {feature.current ? '✔️' : ''}
      </span>
      <span className="col-6 related-feature">{feature.description}</span>
      <span className="col related-related-check">
        {feature.related ? '✔️' : ''}
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    relatedProducts: state.relatedProducts,
    currentProduct: state.currentProduct,
    selected: state.selected
  };
};

export default connect(mapStateToProps, {
  _setProductsInfo: setProductsInfo,
  _getRelatedProduct: getRelatedProduct
})(Features);
