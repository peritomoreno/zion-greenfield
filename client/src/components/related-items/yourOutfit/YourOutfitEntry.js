import React from 'react';

const YourOutfitEntry = ({ category, name, price, image }) => {
  return (
    <div>
      <button type="button">temp</button>
      <img src={image} alt="product" />
      <p>{category}</p>
      <p>{name}</p>
      <p>${price}</p>
    </div>
  );
};

export default YourOutfitEntry;
