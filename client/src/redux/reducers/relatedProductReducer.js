import { SET_PRODUCTS_INFO, SET_STYLES } from '../actions/related';

const defaultState = { products: [], styles: [] };

const relatedProductReducer = (state = defaultState, action) => {
  const currentState = { ...state };
  switch (action.type) {
    case SET_PRODUCTS_INFO:
      currentState.products.push(action.payload);
      return currentState;
    case SET_STYLES:
      currentState.styles.push(action.payload);
      return currentState;
    default:
      return state;
  }
};

export default relatedProductReducer;
