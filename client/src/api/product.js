const Product = {
  getProduct: (id) => {
    return fetch(`http://3.134.102.30/products/${id}`).then((res) => {
      return res.json();
    });
  },
  getStyles: (id) => {
    return fetch(`http://3.134.102.30/products/${id}/styles`).then((res) => {
      return res.json();
    });
  },
  getRelated: (id) => {
    return fetch(`http://3.134.102.30/products/${id}/related`).then((res) => {
      return res.json();
    });
  }
};

export default Product;
