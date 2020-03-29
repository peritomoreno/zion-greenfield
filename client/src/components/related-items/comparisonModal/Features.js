import React from 'react';
import { connect } from 'react-redux';

import {
  setProductsInfo,
  getRelatedProduct
} from '../../../redux/actions/related';

const Features = ({ feature }) => {
  return (
    <div data-testid="features" className="">
      <span>{feature.current ? '*' : ''}</span>
      <span>{feature.description}</span>
      <span>{feature.related ? '*' : ''}</span>
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
