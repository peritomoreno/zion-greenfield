import React from 'react';
import QuestionItem from './QuestionItem';

const QuestionList = ({ questions }) => {
  return (
    <div
      data-testid="questionList"
      style={{ marginTop: '8px', marginBottom: '8px' }}
    >
      {questions.map((question) => {
        return (
          <QuestionItem key={question.question_id} currentQuestion={question} />
        );
      })}
    </div>
  );
};

export default QuestionList;
