import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchQuestion = ({ term, setTerm }) => {
  return (
    <InputGroup
      data-testid="searchQuestion"
      style={{
        height: '60px',
        width: '100%',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <FormControl
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        style={{ height: '60px', marginBottom: '12px', position: 'absolute' }}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <FontAwesomeIcon
        icon={faSearch}
        style={{
          height: '20px',
          width: '20px',
          alignSelf: 'center',
          position: 'absolute',
          zIndex: '10',
          right: '16px'
        }}
      />
    </InputGroup>
  );
};

export default SearchQuestion;
