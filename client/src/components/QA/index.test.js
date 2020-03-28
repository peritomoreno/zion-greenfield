import React from 'react';
import { render } from '@testing-library/react';
import QA from './index';

test('renders main QA component', () => {
  const { getByTestId } = render(<QA />);
  const component = getByTestId('qaTest');
  expect(component).toBeInTheDocument();
});
