import React from 'react';
import StyleGrid from './StyleGrid';

const StyleSelector = () => (
  <div data-testid="styleSelector">
    StyleSelector component
    <div>
      <span>
        <strong>STYLE {'>'} </strong>
      </span>
      SELECTED STYLE
    </div>
    <StyleGrid />
  </div>
);

export default StyleSelector;
