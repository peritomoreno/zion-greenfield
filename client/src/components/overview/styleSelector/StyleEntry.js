import React from 'react';

const StyleEntry = ({ thumbnailUrl, isSelected, handleClick }) => (
  <div
    data-testid="styleEntry"
    style={{
      height: '60px',
      width: '60px',
      border: '1px solid gray',
      borderRadius: '100%',
      margin: '10px 10px',
      backgroundImage: `url("${thumbnailUrl}")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%'
    }}
    onClick={handleClick}
    onKeyDown={handleClick}
    role="option"
    tabIndex={0}
    aria-selected={isSelected}
  >
    {isSelected && (
      <div
        style={{
          float: 'right'
        }}
      >
        <span role="img" aria-label="selected" style={{ fontSize: 15 }}>
          ✔️
        </span>
      </div>
    )}
  </div>
);

export default StyleEntry;
