import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ToggleDispatch from '../context';
import ComparisonModal from '../comparisonModal/ComparisonModal';
import changeProduct from '../../../redux/actions/changeProduct';
import RatingStars from '../../RatingStars';

const defaultImgae =
  'https://images.squarespace-cdn.com/content/v1/5161eef2e4b05c308167a6fa/1555279090674-AG75CRP3YADFPC3XXUGO/ke17ZwdGBToddI8pDm48kN_ZoNdj1kv_gIvm4zjH76N7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8AelHsSihC3tfiYK1eHEM7W3AVjJQSBul2wE-DqW7dygg/_MG_8028-1.jpg?format=1500w';

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
  initProduct
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
        <RatingStars rating={5} />
      </div>
      {toggle.isCompareClicked ? (
        <ToggleDispatch.Provider value={dispatch}>
          <ComparisonModal features={features} name={name} toggle={toggle} />
        </ToggleDispatch.Provider>
      ) : (
        ''
      )}
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
