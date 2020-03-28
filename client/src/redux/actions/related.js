export const SET_RELATED_PRODUCT = 'SET_RELATED_PRODUCT';
export const setRelatedProduct = (product) => ({
  type: SET_RELATED_PRODUCT,
  payload: product
});

export const GET_RELATED_PRODUCT = 'GET_RELATED_PRODUCT';
export const getRelatedProduct = (currentProductId) => (dispatch) => {
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
