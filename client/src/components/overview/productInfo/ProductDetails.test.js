import React from 'react';
import { render } from '@testing-library/react';
import ProductDetails from './ProductDetails';

it('renders learn react link', () => {
  const { getByTestId } = render(<ProductDetails />);
  const component = getByTestId('productDetails');
  expect(component).toBeInTheDocument();
});
