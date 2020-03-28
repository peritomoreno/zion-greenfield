import React from 'react';
import { render } from '@testing-library/react';
import Features from './Features';

it('renders <Features />', () => {
  const { getByTestId } = render(<Features />);
  const relateRootComponent = getByTestId('features');
  expect(relateRootComponent).toBeInTheDocument();
});
