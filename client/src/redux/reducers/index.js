import { combineReducers } from 'redux';
import currentProductReducer from './currentProductReducer';
import currentStylesReducer from './currentStylesReducer';
import selectedReducer from './selectedReducer';
import relatedProductReducer from './relatedProductReducer';
import currentQuestionsReducer from './currentQuestionsReducer';
import currentReviewsReducer from './currentReviewsReducer';
import currentBreakdownsReducer from './currentBreakdownsReducer';

const rootReducer = combineReducers({
  selected: selectedReducer,
  currentProduct: currentProductReducer,
  currentStyles: currentStylesReducer,
  relatedProducts: relatedProductReducer,
  currentQuestion: currentQuestionsReducer,
  currentReviews: currentReviewsReducer,
  currentBreakdowns: currentBreakdownsReducer
});

export default rootReducer;
