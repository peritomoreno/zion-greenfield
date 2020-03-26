import React from 'react';
import { SearchQuestion } from './SearchQuestion';
import { QuestionList } from './QuestionList';

const sampleResult = {
  product_id: '3',
  results: [
    {
      question_id: 19,
      question_body: 'Why is this product cheaper here than other sites?',
      question_date: '2018-11-28T00:00:00.000Z',
      asker_name: 'jbilas',
      question_helpfulness: 11,
      reported: 0,
      answers: {},
    },
    {
      question_id: 27,
      question_body: 'What fabric is the back made of?',
      question_date: '2018-04-12T00:00:00.000Z',
      asker_name: 'wildchild',
      question_helpfulness: 8,
      reported: 0,
      answers: {
        '125091': {
          id: 125091,
          body: '90% Polyester and 10% Garbage',
          date: '2020-02-07T00:00:00.000Z',
          answerer_name: 'BurritoEater',
          helpfulness: 91,
          photos: [
            'https://images.unsplash.com/photo-1507864676385-e69c0ca53dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          ],
        },
        '125092': {
          id: 125092,
          body:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, similique.',
          date: '2020-02-07T00:00:00.000Z',
          answerer_name: 'Mmemekemem',
          helpfulness: 101,
          photos: [
            'https://images.unsplash.com/photo-1507864676385-e69c0ca53dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          ],
        },
      },
    },
  ],
};

export const QA = () => {
  return (
    <div id="qa">
      <h1>QUESTIONS & ANSWERS</h1>
      <SearchQuestion />
      <QuestionList questions={sampleResult.results} />
    </div>
  );
};

Date.prototype.formatted = function () {
  return this.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
