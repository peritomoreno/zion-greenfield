import React from 'react';
import { render } from '@testing-library/react';
import RatingsBreakdown from './RatingsBreakdown';

it('renders the Ratings Breakdown component', () => {
  const { getByTestId } = render(<RatingsBreakdown />);
  const component = getByTestId('ratingsBreakdown');
  expect(component).toBeInTheDocument();
});
