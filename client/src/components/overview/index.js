import React from 'react';
import ProductInfo from './productInfo';

// const { selected, currentProduct, styles } = sampleStore;

const Overview = ({ sampleStore: { selected, currentProduct, styles } }) => (
  <div data-testid="productOverview">
    <ProductInfo
      selected={selected}
      currentProduct={currentProduct}
      currentStyles={styles}
    />
  </div>
);

export default Overview;
