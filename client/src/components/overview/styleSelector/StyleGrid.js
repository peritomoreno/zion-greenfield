import React from 'react';
import StyleEntry from './StyleEntry';

const StyleGrid = ({ styles, selectedStyleId }) => {
  return (
    <div
      data-testid="styleGrid"
      style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
    >
      {styles.map((style) => (
        <StyleEntry
          style={style}
          isSelected={selectedStyleId === style.style_id}
        />
      ))}
    </div>
  );
};

export default StyleGrid;
