import React, { useState, useEffect } from 'react';
import QA_API from '../../api/qa';
import SearchQuestion from './Search/SearchQuestion';
import QuestionList from './Questions/QuestionList';

const QA = () => {
  const [questions, setQuestions] = useState([]);

  const updateQuestions = async () => {
    const response = await QA_API.fetchAllQuestions(10);
    if (response.error) return;
    setQuestions(response.results);
  };

  useEffect(() => {
    updateQuestions();
  }, []);

  const renderQuestionList = () => {
    if (questions.length === 0) {
      return <button type="button">Submit A New Question</button>;
    }
    return (
      <div>
        <QuestionList questions={questions} />
        <div className="bottomButton">
          <button className="btn btn-outline-secondary" type="button">
            MORE ANSWERED QUESTIONS
          </button>
          <button className="btn btn-outline-secondary ml-2" type="button">
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
      {renderQuestionList()}
    </div>
  );
};

export default QA;
