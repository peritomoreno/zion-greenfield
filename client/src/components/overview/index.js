import React from 'react';
import ProductInfo from './productInfo';
import ImageGallery from './imageGallery';
import ProductDescription from './productDescription';

// const { selected, currentProduct, styles } = sampleStore;

const Overview = ({ sampleStore: { selected, currentProduct, styles } }) => (
  <div data-testid="productOverview">
    <div style={{ display: 'flex' }}>
      <ImageGallery selected={selected} />
      <ProductInfo
        selected={selected}
        currentProduct={currentProduct}
        currentStyles={styles}
      />
    </div>
    <ProductDescription currentProduct={currentProduct} />
  </div>
);

export default Overview;
