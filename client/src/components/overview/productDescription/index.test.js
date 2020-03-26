import React from 'react';
import { render } from '@testing-library/react';
import ProductDescription from './index';

it('renders the ProductDescription', () => {
  const { getByTestId } = render(<ProductDescription />);
  const component = getByTestId('productDescription');
  expect(component).toBeInTheDocument();
});
