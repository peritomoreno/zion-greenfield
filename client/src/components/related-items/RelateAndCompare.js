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
      outfit: [
        {
          id: 20,
          name: 'Lukas 1000 Hoodie',
          category: 'Hoodie',
          price: '258',
          thumbnail_url:
            'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
        },
        {
          id: 0,
          name: 'Alphonso 1050 Shirt',
          category: 'Shirt',
          price: '900',
          rating: '',
          thumbnail_url:
            'https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
        }
      ]
    };
    this.addOutfitHandler = this.addOutfitHandler.bind(this);
    this.deleteOutfitHandler = this.deleteOutfitHandler.bind(this);
  }

  componentDidMount() {
    const { currentProduct, _getRelatedProduct } = this.props;
    _getRelatedProduct(currentProduct.id);
    const storage = localStorage.getItem('yourOutfit');
    if (storage !== null) {
      this.setState({ outfit: JSON.parse(storage) });
    }
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

  deleteOutfitHandler(id) {
    let products = JSON.parse(localStorage.getItem('yourOutfit'));
    products = products.filter((product) => {
      return product.id !== id;
    });
    localStorage.setItem('yourOutfit', JSON.stringify(products));
    this.setState({ outfit: products });
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
