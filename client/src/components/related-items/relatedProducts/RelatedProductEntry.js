import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ToggleDispatch from '../context';
import ComparisonModal from '../comparisonModal/ComparisonModal';
import changeProduct from '../../../redux/actions/changeProduct';
import RatingStars from '../../RatingStars';

const defaultImgae =
  'https://s7d5.scene7.com/is/image/UrbanOutfitters/55514509_005_b?$xlarge$&hei=900&qlt=80&fit=constrain';
const initialState = { isCompareClicked: false };
const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleCompare':
      return { isCompareClicked: !state.isCompareClicked };
    default:
      throw new Error();
  }
};

const RelatedProductsEntry = ({
  category,
  name,
  price,
  productId,
  relatedProducts,
  features,
  initProduct,
  rating
}) => {
  const getImage = (relatedStyles) => {
    let results = null;
    relatedStyles.forEach((style) => {
      if (Number(style.product_id) === productId) {
        if (style.results.length > 0) {
          const imgURL = style.results[0].photos[0].url;
          results = imgURL === null ? defaultImgae : imgURL;
        }
      }
    });
    return results;
  };

  const [toggle, dispatch] = useReducer(reducer, initialState);
  const { styles } = relatedProducts;
  const imageStyle = {
    width: '100%',
    height: '295px',
    backgroundImage: `url(${getImage(styles)})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  // console.log(rating);
  return (
    <div
      role="button"
      tabIndex={0}
      className="related-card"
      data-testid="related-product-entry"
      onClick={() => initProduct(productId)}
      onKeyPress={() => {}}
    >
      <button
        type="button"
        className="related-button"
        onClick={(e) => {
          e.stopPropagation();
          dispatch({ type: 'toggleCompare' });
        }}
      >
        <FontAwesomeIcon icon={faStar} />
      </button>
      <div className="related-image-container">
        <div style={imageStyle} />
      </div>
      <div className="related-product-info">
        <p className="related-category">{category}</p>
        <p className="related-name">{name}</p>
        <p className="related-price">${price}</p>
        <RatingStars rating={rating} />
      </div>
      <div className="related-modal-div">
        {toggle.isCompareClicked ? (
          <ToggleDispatch.Provider value={dispatch}>
            <ComparisonModal features={features} name={name} toggle={toggle} />
          </ToggleDispatch.Provider>
        ) : (
          ''
        )}
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

const mapDispatchToProps = (dispatch) => {
  return {
    initProduct: (id) => dispatch(changeProduct(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RelatedProductsEntry);
