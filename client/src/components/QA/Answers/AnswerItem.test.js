import React from 'react';
import { render } from '@testing-library/react';
import AnswerItem from './AnswerItem';

const testData = {
  id: 98,
  body: 'Suede',
  date: '2019-10-12T00:00:00.000Z',
  answerer_name: 'n00bgamer',
  helpfulness: 71,
  photos: []
};

test('renders AnswerItem', () => {
  const { getByTestId } = render(<AnswerItem answer={testData} />);
  const component = getByTestId('answerItem');
  expect(component).toBeInTheDocument();
});
