import React from 'react';
import { Question } from './Question';

export const QuestionList = ({ questions }) => {
  return (
    <div>
      {questions.map((question) => {
        return <Question currentQuestion={question} />;
      })}
    </div>
  );
};
