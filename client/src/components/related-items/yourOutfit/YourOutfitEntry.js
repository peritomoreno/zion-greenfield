import React from 'react';

const YourOutfitEntry = ({
  category,
  name,
  price,
  image,
  productId,
  deleteOutfitHandler
}) => {
  return (
    <div data-testid="your-outfit-entry" className="col related-card">
      <button
        type="button"
        className="related-button"
        onClick={() => deleteOutfitHandler(productId)}
      >
        temp
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

export default YourOutfitEntry;
