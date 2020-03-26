import React from 'react';
import RelatedProducts from './RelatedProducts';
import YourOutfit from './YourOutfit';
import ComparisonModal from './ComparisonModal';
import data from './dummy.json';

class RelateAndCompare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <RelatedProducts relatedProducts={data} />
        <YourOutfit savedOutfit={data} />
        <ComparisonModal />
      </div>
    );
  }
}

export default RelateAndCompare;
