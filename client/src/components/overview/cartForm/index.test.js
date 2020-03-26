import React from 'react';
import { render } from '@testing-library/react';
import CartForm from './index';

it('renders the CartForm', () => {
  const { getByTestId } = render(<CartForm />);
  const component = getByTestId('cartForm');
  expect(component).toBeInTheDocument();
});
