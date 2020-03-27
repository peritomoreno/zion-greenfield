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
      {answer.photos.map((photoUrl) => (
        <img
          src={photoUrl}
          alt=" "
          style={{ width: '120px', height: '120px' }}
          className="img-thumbnail"
        />
      ))}
      <br />
      by {answer.answerer_name}
      {', '}
      {dateFormatter(answer.date)} | Helpful?{' '}
      <button
        type="button"
        style={{
          color: '#919191',
          border: 'none',
          textDecoration: 'underline'
        }}
      >
        Yes
      </button>
      ({answer.helpfulness}) |{' '}
      <button
        type="button"
        style={{
          color: '#919191',
          border: 'none',
          textDecoration: 'underline'
        }}
      >
        report
      </button>
    </div>
  );
};

export default AnswerItem;
