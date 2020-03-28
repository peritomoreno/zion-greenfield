import { Product } from '../../api/index';

export const SET_PRODUCTS_INFO = 'SET_RELATED_PRODUCT';
export const SET_STYLES = 'SET_STYLES';
export const GET_RELATED_PRODUCT = 'GET_RELATED_PRODUCT';

export const setProductsInfo = (product) => ({
  type: SET_PRODUCTS_INFO,
  payload: product
});

export const setStyles = (styles) => ({
  type: SET_STYLES,
  payload: styles
});

export const getRelatedProduct = (currentProductId) => (dispatch) => {
  Product.getRelated(currentProductId).then((ids) => {
    ids.forEach((id) => {
      Product.getProduct(id)
        .then((product) => dispatch(setProductsInfo(product)))
        .then(() => Product.getStyles(id))
        .then((res) => {
          dispatch(setStyles(res));
        });
    });
  });

  // const relatedUrl = `http://3.134.102.30/products/${currentProductId}/related`;
  // async fetch(relatedUrl)
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((ids) =>
  //     ids
  //       .forEach((id) => fetch(`http://3.134.102.30/products/${id}`))
  //       .then((res) => console.log(res.json()))
  //   );
};
