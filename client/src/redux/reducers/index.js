import { combineReducers } from 'redux';
import currentProductReducer from './currentProductReducer';
import currentStylesReducer from './currentStylesReducer';
import selectedReducer from './selectedReducer';
import relatedProductReducer from './relatedProductReducer';

const rootReducer = combineReducers({
  selected: selectedReducer,
  currentProduct: currentProductReducer,
  currentStyles: currentStylesReducer,
  relatedProducts: relatedProductReducer
});

export default rootReducer;
