import React from 'react';
import { connect } from 'react-redux';
import StyleGrid from './StyleGrid';

const StyleSelector = ({ selectedStyleName }) => (
  <div data-testid="styleSelector">
    <div>
      <span>
        <strong>STYLE {'>'} </strong>
      </span>
      {selectedStyleName}
    </div>
    <StyleGrid />
  </div>
);

const mapStateToProps = (state) => ({
  selectedStyleName: state.selected.style.name
});

export default connect(mapStateToProps)(StyleSelector);
