import { combineReducers } from 'redux';
import currentProductReducer from './currentProductReducer';
import currentStylesReducer from './currentStylesReducer';
import selectedReducer from './selectedReducer';

const rootReducer = combineReducers({
  selected: selectedReducer,
  currentProduct: currentProductReducer,
  currentStyles: currentStylesReducer
});

export default rootReducer;
