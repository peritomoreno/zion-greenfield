import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import changeProduct from '../redux/actions/changeProduct';
import Overview from './overview';
import RelateAndCompare from './related-items/RelateAndCompare';
import ReviewWidget from './reviews';
import logo from '../styles/zionlogo.png';
import search from '../styles/search.png';

import QA from './QA';

function App({ initStore, id = 4, match, history }) {
  const productId = match.params.id ? match.params.id : id;

  useEffect(() => {
    initStore(productId);
  }, [initStore, productId]);

  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? 'darkmode' : ''}>
      <div className="container">
        <div className="Banner">
          <img className="logo" src={logo} alt="Logo" />
          <img className="search" src={search} alt="search" />
        </div>
        <button
          type="button"
          className="darkmode-button"
          onClick={() => {
            setDarkMode(!isDarkMode);
          }}
        >
          {isDarkMode ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>
        <br />
        <br />
        <Overview />
        <br />
        <br />
        <RelateAndCompare history={history} />
        <br />
        <br />
        <QA />
        <br />
        <br />
        <br />
        <br />
        <ReviewWidget />
        <br />
        <br />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    initStore: (id) => dispatch(changeProduct(id))
  };
};

export default connect(null, mapDispatchToProps)(App);
