import React from 'react';

const RelatedProductsEntry = ({ category, name, price, image }) => {
  return (
    <div className="col">
      <button type="button">temp</button>
      <img src={image} alt="product" />
      <p>{category}</p>
      <p>{name}</p>
      <p>${price}</p>
    </div>
  );
};

export default RelatedProductsEntry;
