/* eslint-disable camelcase */
import React, { useState } from 'react';
import AnswerList from '../Answers/AnswerList';
import QA_API from '../../../api/qa';
import AnswerModalForm from '../Modal/AnswerModalForm';

const QuestionItem = ({ currentQuestion }) => {
  const {
    question_body: title,
    question_id: id,
    question_helpfulness,
    answers
  } = currentQuestion;

  const [answerPaginate, setanswerPaginate] = useState(2);
  const [helpfulness, setHelpfulness] = useState(question_helpfulness);
  const [showAddAnswer, setShowAddAnswer] = useState(false);

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
        <h5 className="col align-self-start">Q: {title}</h5>
        <div className="col-3 sideAction fcol align-self-end">
          <AnswerModalForm
            show={showAddAnswer}
            handleClose={() => setShowAddAnswer(false)}
            questionId={id}
            questionBody={title}
          />
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
            onClick={() => setShowAddAnswer(true)}
          >
            Add Answer
          </button>
        </div>
      </div>
      <div className="row">
        <h5 className="col-1 align-self-start">A: </h5>
        <div className="col">
          <AnswerList answers={sortedAnswers.slice(0, answerPaginate)} />
          {!(
            sortedAnswers.length <= 2 ||
            answerPaginate >= sortedAnswers.length - 1
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
