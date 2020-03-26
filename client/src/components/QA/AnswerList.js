import React from 'react';
import AnswerItem from './AnswerItem';

const AnswerList = ({ answers }) => {
  return (
    <div id="answerList">
      {answers.map((answer) => (
        <AnswerItem key={answer.id} answer={answer} />
      ))}
    </div>
  );
};

export default AnswerList;
