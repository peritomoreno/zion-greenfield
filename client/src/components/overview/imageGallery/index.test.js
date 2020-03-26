/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import ImageGallery from './index';
import sampleStore from '../../../sampleData/sampleStore';

it('renders <ProductInfo />', () => {
  const { getByTestId } = render(<ImageGallery {...sampleStore} />);
  const component = getByTestId('imageGallery');
  expect(component).toBeInTheDocument();
});
