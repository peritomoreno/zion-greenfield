import React from 'react';
import { connect } from 'react-redux';

const ProductDetails = ({ category, name, originalPrice, salePrice }) => {
  let priceDiv;
  if (salePrice)
    priceDiv = (
      <div>
        <span className="text-danger">${salePrice}</span>{' '}
        <del>${originalPrice}</del>
      </div>
    );
  else {
    priceDiv = <div>{`$${salePrice || originalPrice}`}</div>;
  }
  return (
    <div data-testid="productDetails">
      <div>{category.toUpperCase()}</div>
      <div>
        <h2>{name}</h2>
      </div>
      {priceDiv}
    </div>
  );
};

const mapStateToProps = (state) => ({
  category: state.currentProduct.category,
  name: state.currentProduct.name,
  originalPrice: Number(state.selected.style.original_price),
  salePrice: Number(state.selected.style.sale_price)
});

export default connect(mapStateToProps)(ProductDetails);
