import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

import RelatedProductsEntry from './RelatedProductEntry';
import {
  setProductsInfo,
  getRelatedProduct
} from '../../../redux/actions/related';

const RelatedProducts = ({ relatedProducts }) => {
  const containerStyle = {
    width: relatedProducts.products.length * 295
  };
  let scroller = null;

  const handleRightClick = () => {
    scroller.scrollLeft += 650;
  };

  const handleLeftClick = () => {
    scroller.scrollLeft -= 650;
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [rightButtonPosition, setRightButtonPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(scroller.scrollLeft);
  };

  const updateRightButtonPosition = () => {
    if (scroller !== null) {
      setRightButtonPosition(
        window.innerWidth - scroller.getBoundingClientRect().right
      );
    }
  };

  useEffect(() => {
    updateRightButtonPosition();
  });

  const handleResize = () => {
    updateRightButtonPosition();
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <div className="related-container" data-testid="related-products">
      <div className="related-button-container">
        <p className="related-title">Related Products</p>
        <div
          ref={(el) => {
            scroller = el;
          }}
          onScroll={() => {
            handleScroll();
          }}
          className="related-card-container clearfix"
        >
          <button
            className={`related-gallery-button left ${
              scrollPosition < 10 ? 'hide-button' : ''
            }`}
            type="button"
            onClick={() => {
              handleLeftClick();
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            type="button"
            className={`related-gallery-button right ${
              scrollPosition > relatedProducts.products.length * 295 - 1130
                ? 'hide-button'
                : ''
            }`}
            style={{
              right: rightButtonPosition
            }}
            onClick={() => {
              handleRightClick();
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <div style={containerStyle}>
            <div />
            {relatedProducts.products.map((product) => {
              return (
                <RelatedProductsEntry
                  key={product.id}
                  productId={product.id}
                  category={product.category}
                  name={product.name}
                  price={product.default_price}
                  features={product.features}
                  rating={product.rating}
                />
              );
            })}
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    relatedProducts: state.relatedProducts,
    currentProduct: state.currentProduct
  };
};

export default connect(mapStateToProps, {
  _setProductsInfo: setProductsInfo,
  _getRelatedProduct: getRelatedProduct
})(RelatedProducts);
