import React from 'react';
import { connect } from 'react-redux';
import Features from './Features';

import {
  setProductsInfo,
  getRelatedProduct
} from '../../../redux/actions/related';

const ComparisonModal = ({ features, currentProduct, name }) => {
  const CurrentFeatures = currentProduct.features;

  const getFeature = (featuresArr) => {
    let feat = featuresArr;
    feat = feat.map((ft) => {
      let f = ft;
      if (f.value === 'null') {
        f = ft.feature;
      } else {
        f = ft.value;
      }
      return f;
    });
    return feat;
  };

  // [
  //   {"feature description 1": [true, false]},
  //   {"feature description 2": [true, true]}
  // ]

  const combineFeatures = (current, related) => {
    const storage = {};
    const currentFeatures = getFeature(current);
    const relatedFeatures = getFeature(related);

    currentFeatures.forEach((f) => {
      storage[f] = [true, false];
    });

    relatedFeatures.forEach((f) => {
      if (storage[f] === undefined) {
        storage[f] = [false, true];
      } else {
        storage[f][1] = true;
      }
    });

    return Object.entries(storage).map(([key, value]) => {
      return {
        description: key,
        current: value[0],
        related: value[1]
      };
    });
  };

  return (
    <div data-testid="comparison-modal">
      <div className="comparison-modal-container">
        <div className="comparison-modal">
          <div>
            <p className="comparing">Comparing</p>
          </div>
          <div className="row">
            <p className="col compare-current-name">{currentProduct.name}</p>
            <p className="col compare-related-name">{name}</p>
          </div>
          {combineFeatures(CurrentFeatures, features).map((feature) => {
            return <Features feature={feature} />;
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    relatedProducts: state.relatedProducts,
    currentProduct: state.currentProduct,
    selected: state.selected
  };
};

export default connect(mapStateToProps, {
  _setProductsInfo: setProductsInfo,
  _getRelatedProduct: getRelatedProduct
})(ComparisonModal);
