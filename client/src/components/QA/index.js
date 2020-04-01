import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SearchQuestion from './Search/SearchQuestion';
import QuestionList from './Questions/QuestionList';
import ModalForm from './Modal/ModalForm';

const QA = ({ storeQuestions }) => {
  const [questions, setQuestions] = useState([]);
  const [showAddQuestion, setshowAddQuestion] = useState(false);

  useEffect(() => {
    setQuestions(storeQuestions);
  }, [storeQuestions]);

  const handleAddQuestionModalClose = () => {
    setshowAddQuestion(false);
  };

  const showAddQuestionModal = () => {
    setshowAddQuestion(true);
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
        <QuestionList questions={questions} />
        <div className="bottomButton">
          <button className="btn btn-outline-secondary" type="button">
            MORE ANSWERED QUESTIONS
          </button>
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
      <SearchQuestion />
      {/* {FIXME: Console err: findDOMNode is deprecated in StrictMode} */}
      <ModalForm
        show={showAddQuestion}
        handleClose={handleAddQuestionModalClose}
        content={{
          title: 'Ask Your Question',
          subtitle: 'About the [Product Name]',
          body: [
            {
              labelName: 'Your Question',
              inputType: 'text',
              placeholder: 'test'
            }
          ]
        }}
      />
      {renderQuestionList()}
    </div>
  );
};

const mapStatetoProps = (state) => ({
  storeQuestions: state.currentQuestion
});

export default connect(mapStatetoProps, null)(QA);
