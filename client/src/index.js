import React from 'react';
import ReactDOM from 'react-dom';
// import './styles/index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import './styles/darkmode.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* use AppContainer in futre */}
      <Router>
        <Route path="/" exact component={App} id={4} />
        <Route path="/product/:id" component={App} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
