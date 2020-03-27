import React from 'react';
// import YourOutfitEntry from './YourOutfitEntry';

/*
const getDefaultStyle = (styles) => {
  let result = null;
  styles.forEach((style) => {
    if (style['default?'] === 1) {
      result = style;
    }
  });
  return result;
};
*/

const YourOutfit = () => {
  return (
    <div className="related-container">
      <p className="related-title">Your Outfit</p>
      <div className="outfit-card">
        <div>
          {/* <p>+</p> */}
          <div className="add-outfit">
            <p className="add-to-outfit">Add to Outfit</p>
          </div>
        </div>
      </div>
    </div>
  );
};
/*
<div>
  <p>Your Outfit</p>
  {savedOutfit.map((product) => {
    return (
      <YourOutfitEntry
        key={product.id}
        image={getDefaultStyle(product.styles).photos[0].thumbnail_url}
        category={product.category}
        name={product.name}
        price={getDefaultStyle(product.styles).original_price}
      />
    );
  })}
</div>;
*/

export default YourOutfit;
