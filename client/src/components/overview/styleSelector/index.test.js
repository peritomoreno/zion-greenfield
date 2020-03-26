import React from 'react';
import { render } from '@testing-library/react';
import StyleSelector from './index';

it('renders learn react link', () => {
  const { getByTestId } = render(<StyleSelector />);
  const component = getByTestId('styleSelector');
  expect(component).toBeInTheDocument();
});
