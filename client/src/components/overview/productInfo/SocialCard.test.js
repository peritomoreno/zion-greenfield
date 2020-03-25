import React from 'react';
import { render } from '@testing-library/react';
import SocialCard from './SocialCard';

it('renders learn react link', () => {
  const { getByTestId } = render(<SocialCard />);
  const component = getByTestId('socialCard');
  expect(component).toBeInTheDocument();
});
