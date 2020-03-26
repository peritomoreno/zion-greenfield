import React from 'react';
import { render } from '@testing-library/react';
import SearchQuestion from './SearchQuestion';

test('renders learn react link', () => {
  const { getByTestId } = render(<SearchQuestion />);
  const component = getByTestId('searchQuestion');
  expect(component).toBeInTheDocument();
});
