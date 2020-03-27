import React from 'react';
import FeatureList from './FeatureList';

const ProductDescription = ({ currentProduct }) => {
  return (
    <div
      data-testid="productDescription"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <div style={{ flex: '1 1 50%' }}>
        <div>
          <h3>{currentProduct.slogan}</h3>
        </div>
        <div>
          {currentProduct.description} Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Delectus corrupti ipsam architecto voluptatibus
          sequi nobis harum error, sed deserunt reprehenderit consequatur, ex,
          amet iusto odio sapiente temporibus culpa illo? Praesentium?
        </div>
      </div>
      <div style={{ flex: '1 1 50%' }}>
        <FeatureList features={currentProduct.features} />
      </div>
    </div>
  );
};

export default ProductDescription;
