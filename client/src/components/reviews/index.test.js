import React from 'react';
import { render } from '@testing-library/react';
import ReviewWidget from './index';

it('renders the Review Widget container', () => {
  const { getByTestId } = render(<ReviewWidget />);
  const component = getByTestId('reviews');
  expect(component).toBeInTheDocument();
});
