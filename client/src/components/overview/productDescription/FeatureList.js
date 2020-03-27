import React from 'react';

const FeatureList = ({ features }) => {
  return (
    <div data-testid="featureList">
      <ul>
        {features.map((f) => (
          <li>{`${f.feature} ${f.value ? `: ${f.value}` : ''}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;
