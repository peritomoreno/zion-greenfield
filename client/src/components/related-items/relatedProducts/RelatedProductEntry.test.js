import React from 'react';
import { render } from '@testing-library/react';
import RelatedProductEntry from './RelatedProductEntry';

it('renders <RelatedProductEntry />', () => {
  const { getByTestId } = render(<RelatedProductEntry />);
  const relateRootComponent = getByTestId('related-product-entry');
  expect(relateRootComponent).toBeInTheDocument();
});
