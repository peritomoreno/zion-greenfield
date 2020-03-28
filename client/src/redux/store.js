import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import sampleStore from '../sampleData/sampleStore';

const middleware = [thunk];

const store = createStore(
  rootReducer,
  sampleStore,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
