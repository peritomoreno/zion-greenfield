import React from 'react';
import { render } from '@testing-library/react';
import ProductRating from './ProductRating';

it('renders learn react link', () => {
  const { getByTestId } = render(<ProductRating />);
  const component = getByTestId('productRating');
  expect(component).toBeInTheDocument();
});
