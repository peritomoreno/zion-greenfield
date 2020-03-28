import React from 'react';
import { render } from '@testing-library/react';
import YourOutfit from './YourOutfit';

it('renders <YourOutfit />', () => {
  const { getByTestId } = render(<YourOutfit />);
  const relateRootComponent = getByTestId('your-outfit');
  expect(relateRootComponent).toBeInTheDocument();
});
