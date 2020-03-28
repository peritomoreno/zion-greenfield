import React from 'react';
import { render } from '@testing-library/react';
import QuestionItem from './QuestionItem';

const testData = {
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
};

test('renders QuestionItem', () => {
  const { getByTestId } = render(<QuestionItem currentQuestion={testData} />);
  const component = getByTestId('questionItem');
  expect(component).toBeInTheDocument();
});
