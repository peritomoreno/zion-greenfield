import React from 'react';
import { render } from '@testing-library/react';
import ReviewTile from './ReviewTile';

it('renders one or more Review Tiles', () => {
  const { getByTestId } = render(<ReviewTile />);
  const component = getByTestId('reviewTile');
  expect(component).toBeInTheDocument();
});
