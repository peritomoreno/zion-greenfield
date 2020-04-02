import React from 'react';
import ProductInfo from './productInfo';
import ImageGallery from './imageGallery';
import ProductDescription from './productDescription';
import StyleSelector from './styleSelector';
import CartForm from './cartForm';
import '../../styles/Overview.css';

// const { selected, currentProduct, styles } = sampleStore;

const Overview = () => (
  <div data-testid="productOverview" id="overview">
    <div className="row">
      <div className="col-md-8">
        <ImageGallery />
      </div>
      <div className="col-md-4">
        <ProductInfo />
        <StyleSelector />
        <CartForm />
      </div>
    </div>

    <ProductDescription />
  </div>
);

export default Overview;
