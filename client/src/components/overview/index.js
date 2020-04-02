import React from 'react';
import ProductInfo from './productInfo';
import ImageGallery from './imageGallery';
import ProductDescription from './productDescription';
import StyleSelector from './styleSelector';
import CartForm from './cartForm';
import '../../styles/Overview.css';

// const { selected, currentProduct, styles } = sampleStore;

const Overview = () => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div data-testid="productOverview" id="overview">
      <div className="row">
        <div className="col">
          <ImageGallery setExpanded={setExpanded} expanded={expanded} />
        </div>
        <div className={`col-md-4 ${expanded && 'd-none'}`}>
          <ProductInfo />
          <StyleSelector />
          <CartForm />
        </div>
      </div>

      <ProductDescription />
    </div>
  );
};

export default Overview;
