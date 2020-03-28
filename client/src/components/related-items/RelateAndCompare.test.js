import React from 'react';
import { render } from '@testing-library/react';
import RelateAndCompare from './RelateAndCompare';

it('renders <RelateAndCompare />', () => {
  const { getByTestId } = render(<RelateAndCompare />);
  const relateRootComponent = getByTestId('relate-compare');
  expect(relateRootComponent).toBeInTheDocument();
});
