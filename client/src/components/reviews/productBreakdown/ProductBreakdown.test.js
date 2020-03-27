import React from 'react';
import { render } from '@testing-library/react';
import ProductBreakdown from './ProductBreakdown';

it('renders learn react link', () => {
  const { getByTestId } = render(<ProductBreakdown />);
  const component = getByTestId('productBreakdown');
  expect(component).toBeInTheDocument();
});
