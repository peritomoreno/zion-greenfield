import React from 'react';
import { render } from '@testing-library/react';
import SearchQuestion from './SearchQuestion';

test('renders SearchQuestion', () => {
  const { getByTestId } = render(<SearchQuestion />);
  const component = getByTestId('searchQuestion');
  expect(component).toBeInTheDocument();
});
