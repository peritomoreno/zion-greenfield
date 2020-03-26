import React from 'react';
import Features from './Features';

const ComparisonModal = () => {
  return (
    <div>
      <p>Comparing</p>
      <table>
        <thead>
          <tr>
            <th>current product</th>
            <th>features</th>
            <th>compared product</th>
          </tr>
        </thead>
        <Features />
      </table>
    </div>
  );
};

export default ComparisonModal;
