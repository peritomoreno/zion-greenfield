import React from 'react';
import { render } from '@testing-library/react';
import AnswerList from './AnswerList';

const testData = [
  {
    id: 98,
    body: 'Suede',
    date: '2019-10-12T00:00:00.000Z',
    answerer_name: 'n00bgamer',
    helpfulness: 71,
    photos: []
  }
];

test('renders AnswerList', () => {
  const { getByTestId } = render(<AnswerList answers={testData} />);
  const component = getByTestId('answerList');
  expect(component).toBeInTheDocument();
});
