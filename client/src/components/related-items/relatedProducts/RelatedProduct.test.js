import React from 'react';
import { render } from '@testing-library/react';
import RelatedProducts from './RelatedProducts';
import SampleStore from '../../../sampleData/sampleStore';

it('renders <RelatedProducts />', () => {
  const { getByTestId } = render(
    <RelatedProducts relatedProducts={SampleStore.related} />
  );
  const relateRootComponent = getByTestId('related-products');
  expect(relateRootComponent).toBeInTheDocument();
});
