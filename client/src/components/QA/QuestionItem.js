import React, { useState } from 'react';
import AnswerList from './AnswerList';

const QuestionItem = ({ currentQuestion }) => {
  const {
    question_body: title,
    // question_id: id,
    // question_date: date,
    question_helpfulness: helpfulness,
    // reported,
    answers
  } = currentQuestion;

  const [answerPaginate, setanswerPaginate] = useState(2);

  const sortedAnswers = Object.values(answers).sort((a, b) =>
    a.helpfulness > b.helpfulness ? -1 : 0
  );

  const handleLoadMoreAnswer = () => {
    if (answerPaginate < sortedAnswers.length - 1) {
      setanswerPaginate(answerPaginate + 2);
    }
  };

  return (
    <div>
      <h3>Q: {title}</h3>
      <div className="sideAction">
        Helpful?{' '}
        <button type="button" style={{ color: '#919191' }}>
          Yes
        </button>
        ({helpfulness}) |{' '}
        <button type="button" style={{ color: '#919191' }}>
          Add Answer
        </button>
      </div>
      <span style={{ fontSize: 20, fontWeight: 'bold' }}>A: </span>
      <AnswerList answers={sortedAnswers.slice(0, answerPaginate)} />
      {!(
        sortedAnswers.length <= 2 || answerPaginate >= sortedAnswers.length
      ) && (
        <button type="button" onClick={handleLoadMoreAnswer}>
          LOAD MORE ANSWERS
        </button>
      )}
    </div>
  );
};

export default QuestionItem;
