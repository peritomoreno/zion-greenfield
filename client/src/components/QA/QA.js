import React, { useState, useEffect } from 'react';
import QA_API from '../../api/qa';
import SearchQuestion from './SearchQuestion';
import QuestionList from './QuestionList';

const QA = () => {
  const [questions, setQuestions] = useState([]);

  const updateQuestions = async () => {
    const response = await QA_API.fetchAllQuestions(10);
    setQuestions(response.results);
  };

  useEffect(() => {
    updateQuestions();
  }, []);

  return (
    <div id="qa">
      <h1>QUESTIONS & ANSWERS</h1>
      <SearchQuestion />
      {questions.length > 0 && <QuestionList questions={questions} />}
      <div className="bottomButton">
        <button type="button">MORE ANSWERED QUESTIONS</button>
        <button type="button">ADD A QUESTION +</button>
      </div>
    </div>
  );
};

export default QA;
