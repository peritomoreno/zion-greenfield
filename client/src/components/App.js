import React from 'react';
import sampleStore from '../sampleData/sampleStore';
import Overview from './overview';
import RelateAndCompare from './related-items/RelateAndCompare';
import ReviewWidget from './reviews';
import QA from './QA';

function App() {
  return (
    <div className="container">
      <br />
      <br />
      <header>
        <h1>Zion Greenfield</h1>
      </header>
      <Overview sampleStore={sampleStore} />
      <br />
      <br />
      <RelateAndCompare sampleStore={sampleStore} />
      <br />
      <br />
      <QA />
      <br />
      <br />
      <ReviewWidget sampleStore={sampleStore} />
      <br />
      <br />
    </div>
  );
}

export default App;
