import React from 'react';
import RelatedProductsEntry from './RelatedProductEntry';
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

const RelatedProducts = ({ relatedProducts }) => {
  return (
    <div>
      <p>Related Products</p>
      {relatedProducts.map((product) => {
        return (
          <RelatedProductsEntry
            key={product.id}
            image={product.thumbnail_url}
            category={product.category}
            name={product.name}
            price={product.default_price}
          />
        );
      })}
    </div>
  );
};

export default RelatedProducts;
