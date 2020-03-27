import React from 'react';
import sampleStore from '../sampleData/sampleStore';
import Overview from './overview';
import RelateAndCompare from './related-items/RelateAndCompare';
import ReviewWidget from './reviews';
import QA from './QA/QA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zion Greenfield</h1>
      </header>
      <Overview sampleStore={sampleStore} />
      <RelateAndCompare sampleStore={sampleStore} />
      <ReviewWidget sampleStore={sampleStore} />
      <QA />
    </div>
  );
}

export default App;
