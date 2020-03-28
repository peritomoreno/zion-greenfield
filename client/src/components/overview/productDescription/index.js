import React from 'react';
import { connect } from 'react-redux';
import FeatureList from './FeatureList';

const ProductDescription = ({ slogan, description, features }) => {
  return (
    <div data-testid="productDescription" className="row">
      <div className="col-md-8">
        <div>
          <h3>{slogan}</h3>
        </div>
        <div>{description}</div>
      </div>
      <div className="col-md-4">
        <FeatureList features={features} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  slogan: state.currentProduct.slogan,
  description: state.currentProduct.description,
  features: state.currentProduct.features
});

export default connect(mapStateToProps)(ProductDescription);
