import { Product } from '../../api/index';

export const SET_PRODUCTS_INFO = 'SET_RELATED_PRODUCT';
export const SET_RELATED_STYLES = 'SET_RELATED_STYLES';
export const GET_RELATED_PRODUCT = 'GET_RELATED_PRODUCT';

export const setProductsInfo = (product) => ({
  type: SET_PRODUCTS_INFO,
  payload: product
});

export const setRelatedStyles = (styles) => ({
  type: SET_RELATED_STYLES,
  payload: styles
});

export const getRelatedProduct = (currentProductId) => (dispatch) => {
  Product.getRelated(currentProductId).then((ids) => {
    ids.forEach((id) => {
      Product.getProduct(id)
        .then((product) => dispatch(setProductsInfo(product)))
        .then(() => Product.getStyles(id))
        .then((res) => {
          dispatch(setRelatedStyles(res));
        });
    });
  });
};
