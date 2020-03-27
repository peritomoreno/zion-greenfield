import React from 'react';

const RelatedProductsEntry = ({ category, name, price, image }) => {
  return (
    <div className="col related-card">
      <button type="button" className="related-button">
        *
      </button>
      <div className="related-image-container">
        <img src={image} alt="product" className="related-image" />
      </div>
      <div className="related-product-info">
        <p className="related-category">{category}</p>
        <p className="related-name">{name}</p>
        <p className="related-price">${price}</p>
        ⭐⭐⭐⭐⭐
      </div>
    </div>
  );
};

export default RelatedProductsEntry;
