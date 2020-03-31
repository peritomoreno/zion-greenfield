import React from 'react';
import { connect } from 'react-redux';
import RelatedProducts from './relatedProducts/RelatedProducts';
import YourOutfit from './yourOutfit/YourOutfit';
import '../../styles/RelatedProduct.css';

import {
  setProductsInfo,
  getRelatedProduct
} from '../../redux/actions/related';

class RelateAndCompare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfit: []
    };
    this.addOutfitHandler = this.addOutfitHandler.bind(this);
    this.deleteOutfitHandler = this.deleteOutfitHandler.bind(this);
  }

  componentDidMount() {
    // const { currentProduct, _getRelatedProduct } = this.props;
    // _getRelatedProduct(currentProduct.id);
    const storage = localStorage.getItem('yourOutfit');
    if (storage !== null) {
      this.setState({ outfit: JSON.parse(storage) });
    }
  }

  deleteOutfitHandler(id) {
    let products = JSON.parse(localStorage.getItem('yourOutfit'));
    products = products.filter((product) => {
      return product.id !== id;
    });
    localStorage.setItem('yourOutfit', JSON.stringify(products));
    this.setState({ outfit: products });
  }

  addOutfitHandler() {
    const { currentProduct, selected } = this.props;
    const product = {
      id: currentProduct.id,
      name: currentProduct.name,
      category: currentProduct.category,
      price: currentProduct.default_price,
      thumbnail_url: selected.style.photos[0].thumbnail_url
    };
    let storage = localStorage.getItem('yourOutfit');
    if (storage === null) {
      localStorage.setItem('yourOutfit', JSON.stringify([product]));
    } else {
      storage = JSON.parse(localStorage.getItem('yourOutfit'));
      storage.push(product);
      localStorage.setItem('yourOutfit', JSON.stringify(storage));
      this.setState({ outfit: storage });
    }
  }

  render() {
    const { relatedProducts } = this.props;
    const { outfit } = this.state;
    return (
      <div data-testid="relate-compare" className="ralated-widget">
        <RelatedProducts
          relatedProducts={relatedProducts.products}
          styles={relatedProducts.styles}
        />
        <YourOutfit
          outfit={outfit}
          addOutfitHandler={this.addOutfitHandler}
          deleteOutfitHandler={this.deleteOutfitHandler}
        />
      </div>
    );
  }
}

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
})(RelateAndCompare);
