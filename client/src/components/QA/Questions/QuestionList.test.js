import React from 'react';
import { render } from '@testing-library/react';
import QuestionList from './QuestionList';

const testData = [
  {
    question_id: 54,
    question_body: 'What fabric is the top made of?',
    question_date: '2019-09-12T00:00:00.000Z',
    asker_name: 'l33tgamer',
    question_helpfulness: 6,
    reported: 0,
    answers: {
      '98': {
        id: 98,
        body: 'Suede',
        date: '2019-10-12T00:00:00.000Z',
        answerer_name: 'n00bgamer',
        helpfulness: 71,
        photos: []
      }
    }
  }
];

test('renders QuestionList', () => {
  const { getByTestId } = render(<QuestionList questions={testData} />);
  const component = getByTestId('questionList');
  expect(component).toBeInTheDocument();
});
