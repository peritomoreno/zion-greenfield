import React from 'react';

const SearchQuestion = () => {
  return (
    <div>
      <input
        data-testid="searchQuestion"
        type="text"
        placeholder=" HAVE A QUESTION? SEARCH FOR ANSWERS..."
        style={{ height: '60px', width: '880px' }}
      />
    </div>
  );
};

export default SearchQuestion;
