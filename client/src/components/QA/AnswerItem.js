import React from 'react';

const dateFormatter = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const AnswerItem = ({ answer }) => {
  return (
    <div>
      <span>{answer.body}</span>
      <br />
      by {answer.answerer_name}
      {', '}
      {dateFormatter(answer.date)} | Helpful?{' '}
      <button type="button" style={{ color: '#919191' }}>
        Yes
      </button>
      ({answer.helpfulness}) |{' '}
      <button type="button" style={{ color: '#919191' }}>
        report
      </button>
    </div>
  );
};

export default AnswerItem;
