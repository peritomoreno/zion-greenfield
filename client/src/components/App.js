import React from 'react';
// import logo from '../logo.svg';
// import '../styles/App.css';
import sampleStore from '../sampleData/sampleStore';
import Overview from './overview';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zion Greenfield</h1>
      </header>
      <Overview sampleStore={sampleStore} />
      {/* <RelatedProductsComponent sampleStore={sampleStore} />
      <QuestionsAndAnswersComponent sampleStore={sampleStore} />
      <RatingsReviewsComponent sampleStore={sampleStore} /> */}
    </div>
  );
}

export default App;
