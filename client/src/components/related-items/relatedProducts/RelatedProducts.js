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
    <div className="related-container">
      <p className="related-title">Related Products</p>
      <div className="row related-card-container">
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
    </div>
  );
};

export default RelatedProducts;
