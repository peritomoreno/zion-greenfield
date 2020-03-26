import React from 'react';

export const Question = ({ currentQuestion }) => {
  const {
    question_body: title,
    question_id: id,
    question_date: date,
    question_helpfulness: helpfulness,
    reported,
    answers,
  } = currentQuestion;
  return (
    <div>
      <h3>Q: {title}</h3>
      <div className="sideAction">
        Helpful?{' '}
        <a href="#" style={{ color: '#919191' }}>
          Yes
        </a>
        ({helpfulness}) |{' '}
        <a href="#" style={{ color: '#919191' }}>
          Add Answer
        </a>
      </div>
      <span style={{ fontSize: 20, fontWeight: 'bold' }}>A: </span>
      <Answers answers={answers} />
    </div>
  );
};

// TODO:
// Put answer to another file

const Answers = ({ answers }) => {
  const sortedAnswers = Object.values(answers).sort((a, b) =>
    a.helpfulness > b.helpfulness ? -1 : 0
  );
  console.log(`sorted answers: ${JSON.stringify(sortedAnswers)}`);
  return (
    <div>
      {sortedAnswers.map((answer) => {
        return (
          <div>
            <span>{answer.body}</span>
            <br />
            by {answer['answerer_name']}
            {', '}
            {new Date(answer.date).formatted()} | Helpful?{' '}
            <a href="#" style={{ color: '#919191' }}>
              Yes
            </a>
            ({answer.helpfulness}) |{' '}
            <a href="#" style={{ color: '#919191' }}>
              report
            </a>
          </div>
        );
      })}
    </div>
  );
};
