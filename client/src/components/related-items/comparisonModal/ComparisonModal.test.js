import React from 'react';
import { render } from '@testing-library/react';
import ComparisonModal from './ComparisonModal';

it('renders <ComparisonModal />', () => {
  const { getByTestId } = render(<ComparisonModal />);
  const relateRootComponent = getByTestId('comparison-modal');
  expect(relateRootComponent).toBeInTheDocument();
});
