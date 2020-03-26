import React from 'react';
import ProductRating from './ProductRating';
import ProductDetails from './ProductDetails';
import SocialCard from './SocialCard';

const ProductInfo = ({ currentProduct, selected }) => (
  <div data-testid="productInfo">
    <section>
      <ProductRating currentProduct={currentProduct} />
    </section>
    <section>
      <ProductDetails
        category={currentProduct.category}
        name={currentProduct.name}
        original_price={Number(selected.style.original_price)}
        sale_price={Number(selected.style.sale_price)}
      />
    </section>
    <section>
      <SocialCard />
    </section>
  </div>
);

export default ProductInfo;
