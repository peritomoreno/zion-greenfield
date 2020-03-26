import React from 'react';
import { render } from '@testing-library/react';
import Overview from './index';
import sampleStore from '../../sampleData/sampleStore';

it('renders <Overview />', () => {
  const { getByTestId } = render(<Overview sampleStore={sampleStore} />);
  const overviewComponent = getByTestId('productOverview');
  expect(overviewComponent).toBeInTheDocument();
});
