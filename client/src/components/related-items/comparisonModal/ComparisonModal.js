import React from 'react';
import Features from './Features';

const ComparisonModal = ({ features }) => {
  return (
    <div data-testid="comparison-modal">
      <div className="comparison-modal-container">
        <div className="comparison-modal">
          <div>
            <p>Comparing</p>
          </div>
          <div>
            <p>current product</p>
            <p>features</p>
            <p>compared product</p>
          </div>
          {features.map((feature) => {
            return <Features feature={feature} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;
