import React from 'react';

const YourOutfitEntry = ({ category, name, price, image }) => {
  return (
    <div data-testid="your-outfit-entry">
      <button type="button">temp</button>
      <img src={image} alt="product" />
      <p>{category}</p>
      <p>{name}</p>
      <p>${price}</p>
    </div>
  );
};

export default YourOutfitEntry;
