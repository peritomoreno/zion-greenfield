import React from 'react';

const isValid = (value) => {
  return value && value !== 'null';
};

const FeatureList = ({ features }) => {
  return (
    <div data-testid="featureList">
      <ul>
        {features.map(({ feature, value }) => (
          <li key={feature + value}>{`${feature}${
            isValid(value) ? `: ${value}` : ''
          }`}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;
