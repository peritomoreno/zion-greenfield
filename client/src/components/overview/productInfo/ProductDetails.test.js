/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import ProductDetails from './ProductDetails';
import sampleStore from '../../../sampleData/sampleStore';

const {
  currentProduct: { category, name },
  selected: {
    style: { sale_price, original_price }
  }
} = sampleStore;

it('renders learn react link', () => {
  const { getByTestId } = render(
    <ProductDetails {...{ category, name, sale_price, original_price }} />
  );
  const component = getByTestId('productDetails');
  expect(component).toBeInTheDocument();
});
