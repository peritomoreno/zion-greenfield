import React from 'react';
import YourOutfitEntry from './YourOutfitEntry';
import AddOutfit from './AddOutfit';

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
const YourOutfit = ({ outfit, addOutfitHandler, deleteOutfitHandler }) => {
  return (
    <div className="related-container">
      <p className="related-title">Your Outfit</p>
      <div className="related-card-container">
        <div style={{ width: (outfit.length + 1) * 275 }}>
          <AddOutfit addOutfitHandler={addOutfitHandler} />
          {outfit.map((product) => {
            return (
              <YourOutfitEntry
                key={product.id}
                productId={product.id}
                image={product.thumbnail_url}
                category={product.category}
                name={product.name}
                price={product.price}
                deleteOutfitHandler={deleteOutfitHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default YourOutfit;
