import React from 'react';
import { render } from '@testing-library/react';
import StyleGrid from './StyleGrid';

it('renders the StyleCard', () => {
  const { getByTestId } = render(<StyleGrid />);
  const component = getByTestId('styleGrid');
  expect(component).toBeInTheDocument();
});
