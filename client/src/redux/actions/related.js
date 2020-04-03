import { Product, Reviews } from '../../api/index';

export const SET_PRODUCTS_INFO = 'SET_PRODUCTS_INFO';
export const SET_RELATED_STYLES = 'SET_RELATED_STYLES';
export const GET_RELATED_PRODUCT = 'GET_RELATED_PRODUCT';
export const RELATED_START = 'RELATED_START';
export const SET_RELATED_RATING = 'SET_RELATED_RATING';

export const startRelatedProduct = () => ({
  type: RELATED_START
});

export const setProductsInfo = (product) => ({
  type: SET_PRODUCTS_INFO,
  payload: product
});

export const setRelatedStyles = (styles) => ({
  type: SET_RELATED_STYLES,
  payload: styles
});

export const setRelatedRating = (meta) => ({
  type: SET_RELATED_RATING,
  payload: meta
});

export const getRelatedProduct = (currentProductId) => (dispatch) => {
  dispatch(startRelatedProduct());
  Product.getRelated(currentProductId)
    .then((ids) => ids.filter((a, b) => ids.indexOf(a) === b))
    .then((ids) => {
      ids.forEach((id) => {
        Product.getProduct(id)
          .then((product) => dispatch(setProductsInfo(product)))
          .then(() => Product.getStyles(id))
          .then((res) => {
            dispatch(setRelatedStyles(res));
          })
          .then(() => Reviews.getMetaData(id))
          .then((meta) => {
            dispatch(setRelatedRating(meta));
          });
      });
    });
};
