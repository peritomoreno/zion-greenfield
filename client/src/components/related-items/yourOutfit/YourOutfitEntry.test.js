import React from 'react';
import { render } from '@testing-library/react';
import YourOutfitEntry from './YourOutfitEntry';

it('renders <YourOutfitEntry />', () => {
  const { getByTestId } = render(<YourOutfitEntry />);
  const relateRootComponent = getByTestId('your-outfit-entry');
  expect(relateRootComponent).toBeInTheDocument();
});
