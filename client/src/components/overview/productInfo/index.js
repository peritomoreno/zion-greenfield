import React from 'react';
import ProductRating from './ProductRating';
import ProductDetails from './ProductDetails';
import SocialCard from './SocialCard';

const ProductInfo = () => (
  <div data-testid="productInfo">
    ProductInfo component
    <section>
      <ProductRating />
    </section>
    <section>
      <ProductDetails />
    </section>
    <section>
      <SocialCard />
    </section>
  </div>
);

export default ProductInfo;
