import React from 'react';
import { connect } from 'react-redux';
import RelatedProducts from './relatedProducts/RelatedProducts';
import YourOutfit from './yourOutfit/YourOutfit';
// import ComparisonModal from './comparisonModal/ComparisonModal';
import '../../styles/RelatedProduct.css';
import { setRelatedProduct } from '../../redux/actions/related';

class RelateAndCompare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { relatedProducts } = this.props;
    return (
      <div data-testid="relate-compare">
        <RelatedProducts relatedProducts={relatedProducts} />
        <YourOutfit savedOutfit={relatedProducts} />
        {/* <ComparisonModal /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    relatedProducts: state.relatedProducts
  };
};

export default connect(mapStateToProps, {
  setRelatedProduct
})(RelateAndCompare);
