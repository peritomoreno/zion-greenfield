/* eslint-disable camelcase */
import React, { useState } from 'react';
import AnswerList from '../Answers/AnswerList';
import QA_API from '../../../api/qa';

const QuestionItem = ({ currentQuestion }) => {
  const {
    question_body: title,
    question_id: id,
    // question_date: date,
    question_helpfulness,
    // reported,
    answers
  } = currentQuestion;

  const [answerPaginate, setanswerPaginate] = useState(2);
  const [helpfulness, setHelpfulness] = useState(question_helpfulness);

  const sortedAnswers = Object.values(answers).sort((a, b) =>
    a.helpfulness > b.helpfulness ? -1 : 0
  );

  const handleLoadMoreAnswer = () => {
    if (answerPaginate < sortedAnswers.length - 1) {
      setanswerPaginate(answerPaginate + 2);
    }
  };

  const handleQuestionHelpful = async () => {
    const questionInfo = localStorage.getItem(id);

    if (!questionInfo) {
      const response = await QA_API.markQuestionHelpful(id);
      if (!response.error) {
        setHelpfulness(helpfulness + 1);
        localStorage.setItem(id, JSON.stringify({ votedQuestionHelp: true }));
      }
    }
  };

  return (
    <div data-testid="questionItem">
      <div className="row">
        <h3 className="col align-self-start">Q: {title}</h3>
        <div className="col sideAction fcol align-self-end">
          Helpful?{' '}
          <button
            type="button"
            style={{
              color: '#919191',
              border: 'none',
              textDecoration: 'underline',
              outline: 'none'
            }}
            onClick={handleQuestionHelpful}
          >
            Yes
          </button>
          ({helpfulness}) |{' '}
          <button
            type="button"
            style={{
              color: '#919191',
              border: 'none',
              textDecoration: 'underline',
              outline: 'none'
            }}
          >
            Add Answer
          </button>
        </div>
      </div>
      <div className="row">
        <h3>A: </h3>
        <div>
          <AnswerList answers={sortedAnswers.slice(0, answerPaginate)} />
          {!(
            sortedAnswers.length <= 2 || answerPaginate >= sortedAnswers.length
          ) && (
            <button
              type="button"
              onClick={handleLoadMoreAnswer}
              style={{ fontWeight: 'bold', border: 'none' }}
            >
              LOAD MORE ANSWERS
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
