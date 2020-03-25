import React from 'react';
import { render } from '@testing-library/react';
import Overview from './index';

it('renders learn react link', () => {
  const { getByTestId } = render(<Overview />);
  const overviewComponent = getByTestId('productOverview');
  expect(overviewComponent).toBeInTheDocument();
});
