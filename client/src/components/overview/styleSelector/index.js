import React from 'react';
import StyleGrid from './StyleGrid';

const StyleSelector = ({ selectedStyleName, selectedStyleId, styles }) => (
  <div data-testid="styleSelector">
    <div>
      <span>
        <strong>STYLE {'>'} </strong>
      </span>
      {selectedStyleName}
    </div>
    <StyleGrid styles={styles} selectedStyleId={selectedStyleId} />
  </div>
);

export default StyleSelector;
