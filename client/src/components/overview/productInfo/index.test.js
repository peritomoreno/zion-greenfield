import React from 'react';
import { render } from '@testing-library/react';
import ProductInfo from './index';

it('renders learn react link', () => {
  const { getByTestId } = render(<ProductInfo />);
  const component = getByTestId('productInfo');
  expect(component).toBeInTheDocument();
});
