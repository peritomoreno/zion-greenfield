import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import changeProduct from '../redux/actions/changeProduct';
import sampleStore from '../sampleData/sampleStore';
import Overview from './overview';
import RelateAndCompare from './related-items/RelateAndCompare';
import ReviewWidget from './reviews';
import QA from './QA';

function App({ initStore }) {
  useEffect(() => {
    initStore(20);
  }, []);

  return (
    <div className="container">
      <br />
      <br />
      <header>
        <h1>Zion Greenfield</h1>
      </header>
      <Overview />
      <br />
      <br />
      <RelateAndCompare />
      <br />
      <br />
      <QA />
      <br />
      <br />
      <ReviewWidget />
      <br />
      <br />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    initStore: (id) => dispatch(changeProduct(id))
  };
};

export default connect(null, mapDispatchToProps)(App);
