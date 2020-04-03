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
    const { currentProduct, selected, rating } = this.props;
    const product = {
      id: currentProduct.id,
      name: currentProduct.name,
      category: currentProduct.category,
      price: currentProduct.default_price,
      thumbnail_url: selected.style.photos[0].url,
      rating
    };

    let storage = localStorage.getItem('yourOutfit');
    if (storage === null) {
      localStorage.setItem('yourOutfit', JSON.stringify([product]));
    } else {
      storage = JSON.parse(localStorage.getItem('yourOutfit'));
      storage = storage.filter((outfit) => outfit.id !== product.id);
      storage.unshift(product);
      localStorage.setItem('yourOutfit', JSON.stringify(storage));
      this.setState({ outfit: storage });
    }
  }

  render() {
    const { relatedProducts } = this.props;
    const { outfit } = this.state;
    return (
      <div data-testid="relate-compare" className="ralated-widget">
        {relatedProducts.products.length > 0 ? (
          <RelatedProducts
            relatedProducts={relatedProducts.products}
            styles={relatedProducts.styles}
          />
        ) : (
          ''
        )}
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
    selected: state.selected,
    rating: state.currentBreakdowns.productRating
  };
};

export default connect(mapStateToProps, {
  _setProductsInfo: setProductsInfo,
  _getRelatedProduct: getRelatedProduct
})(RelateAndCompare);
