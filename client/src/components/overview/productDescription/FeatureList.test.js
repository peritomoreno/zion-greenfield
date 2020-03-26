import React from 'react';
import { render } from '@testing-library/react';
import FeatureList from './FeatureList';

it('renders the FeatureList', () => {
  const { getByTestId } = render(<FeatureList />);
  const component = getByTestId('featureList');
  expect(component).toBeInTheDocument();
});
