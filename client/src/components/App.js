import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import changeProduct from '../redux/actions/changeProduct';
import Overview from './overview';
import RelateAndCompare from './related-items/RelateAndCompare';
import ReviewWidget from './reviews';
import logo from '../styles/zionlogo.png';

import QA from './QA';

function App({ initStore }) {
  useEffect(() => {
    initStore(111);
  }, [initStore]);

  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? 'darkmode' : ''}>
      <div className="container">
        <div className="Banner">
          <img className="logo" src={logo} alt="Logo" />
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
        <RelateAndCompare />
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
