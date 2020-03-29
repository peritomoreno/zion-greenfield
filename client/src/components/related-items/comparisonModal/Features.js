import React from 'react';

const Features = ({ feature }) => {
  return (
    <div data-testid="features" className="">
      <span>*</span>
      <span>{feature.feature}</span>
      <span>*</span>
    </div>
  );
};

export default Features;
