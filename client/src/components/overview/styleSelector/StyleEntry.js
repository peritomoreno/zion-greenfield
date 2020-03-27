import React from 'react';

const StyleEntry = ({ style, isSelected }) => (
  <div
    data-testid="styleEntry"
    style={{
      height: '60px',
      width: '60px',
      border: '1px solid gray',
      borderRadius: '100%',
      margin: '10px 10px',
      backgroundImage: `url("${style.photos[0].thumbnail_url}")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%'
    }}
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
