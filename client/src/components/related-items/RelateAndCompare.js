import React from 'react';
import RelatedProducts from './relatedProducts/RelatedProducts';
import YourOutfit from './yourOutfit/YourOutfit';
// import ComparisonModal from './comparisonModal/ComparisonModal';
import data from '../../sampleData/sampleStore';
import '../../styles/RelatedProduct.css';

class RelateAndCompare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <RelatedProducts relatedProducts={data.related} />
        <YourOutfit savedOutfit={data.related} />
        {/* <ComparisonModal /> */}
      </div>
    );
  }
}

export default RelateAndCompare;
