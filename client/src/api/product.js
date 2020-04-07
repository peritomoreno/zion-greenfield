const Product = {
  getProduct: (id) => {
    return fetch(`http://18.224.200.47/products/${id}`).then((res) => {
      return res.json();
    });
  },
  getStyles: (id) => {
    return fetch(`http://18.224.200.47/products/${id}/styles`).then((res) => {
      return res.json();
    });
  },
  getRelated: (id) => {
    return fetch(`http://18.224.200.47/products/${id}/related`).then((res) => {
      return res.json();
    });
  }
};

export default Product;
