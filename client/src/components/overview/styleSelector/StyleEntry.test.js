import React from 'react';
import { render } from '@testing-library/react';
import StyleEntry from './StyleEntry';

it('renders learn react link', () => {
  const { getByTestId } = render(<StyleEntry />);
  const component = getByTestId('styleEntry');
  expect(component).toBeInTheDocument();
});
