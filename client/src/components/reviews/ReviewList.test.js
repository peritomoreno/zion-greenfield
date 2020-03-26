import React from 'react';
import { render } from '@testing-library/react';
import ReviewList from './ReviewList.js';

it('renders the Review List container', () => {
  const { getByTestId } = render(<ReviewList />);
  const component = getByTestId('reviewList');
  expect(component).toBeInTheDocument();
});
