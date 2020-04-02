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
          style={{ marginTop: '16px' }}
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
              style={{
                marginRight: '16px',
                fontSize: '18px',
                fontWeight: 'bold',
                padding: '22px',
                outline: 'none'
              }}
            >
              MORE ANSWERED QUESTIONS
            </button>
          )}
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={showAddQuestionModal}
            style={{
              marginRight: '16px',
              fontSize: '18px',
              fontWeight: 'bold',
              padding: '22px',
              outline: 'none'
            }}
          >
            ADD A QUESTION +
          </button>
        </div>
      </div>
    );
  };

  return (
    <div id="qa" data-testid="qaTest">
      <h4 style={{ color: 'rgb(104, 104, 104)', marginBottom: '24px' }}>
        QUESTIONS & ANSWERS
      </h4>
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
