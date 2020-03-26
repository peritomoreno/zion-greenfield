import React from 'react';

const ProductDetails = ({
  category,
  name,
  original_price: originalPrice,
  sale_price: salePrice
}) => (
  <div data-testid="productDetails">
    <div>{category.toUpperCase()}</div>
    <div>
      <h2>{name}</h2>
    </div>
    <div>{`$${salePrice || originalPrice}`}</div>
  </div>
);

export default ProductDetails;
