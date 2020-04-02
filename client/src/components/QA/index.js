import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SearchQuestion from './Search/SearchQuestion';
import QuestionList from './Questions/QuestionList';
import QuestionModalForm from './Modal/QuestionModalForm';

const QA = ({ storeQuestions }) => {
  const [questions, setQuestions] = useState([]);
  const [showAddQuestion, setshowAddQuestion] = useState(false);
  const [questionPaginate, setQuestionPaginate] = useState(2);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setQuestions(storeQuestions);
  }, [storeQuestions]);

  useEffect(() => {
    if (searchTerm.length < 3) {
      setQuestions(storeQuestions);
    } else {
      const filtered = storeQuestions.filter((question) =>
        question.question_body.toLowerCase().includes(searchTerm)
      );
      setQuestions(filtered);
    }
  }, [searchTerm, storeQuestions]);

  const handleAddQuestionModalClose = () => {
    setshowAddQuestion(false);
  };

  const showAddQuestionModal = () => {
    setshowAddQuestion(true);
  };

  const handleLoadMoreQuestion = () => {
    if (questionPaginate < questions.length) {
      setQuestionPaginate(questionPaginate + 2);
    }
  };

  const renderQuestionList = () => {
    if (questions.length === 0) {
      return (
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={showAddQuestionModal}
        >
          Submit A New Question
        </button>
      );
    }
    return (
      <div>
        <QuestionList questions={questions.slice(0, questionPaginate)} />
        <div className="bottomButton">
          {!(questions.length <= 2 || questionPaginate >= questions.length) && (
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={handleLoadMoreQuestion}
            >
              MORE ANSWERED QUESTIONS
            </button>
          )}
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={showAddQuestionModal}
          >
            ADD A QUESTION +
          </button>
        </div>
      </div>
    );
  };

  return (
    <div id="qa" data-testid="qaTest">
      <h1>QUESTIONS & ANSWERS</h1>
      <SearchQuestion term={searchTerm} setTerm={setSearchTerm} />
      {/* {FIXME: Console err: findDOMNode is deprecated in StrictMode} */}
      <QuestionModalForm
        show={showAddQuestion}
        handleClose={handleAddQuestionModalClose}
      />
      {renderQuestionList()}
    </div>
  );
};

const mapStatetoProps = (state) => ({
  storeQuestions: state.currentQuestion
});

export default connect(mapStatetoProps, null)(QA);
