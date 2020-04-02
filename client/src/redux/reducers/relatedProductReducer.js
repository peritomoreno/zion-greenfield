import {
  SET_PRODUCTS_INFO,
  SET_RELATED_STYLES,
  RELATED_START
} from '../actions/related';

const defaultRelatedState = { products: [], styles: [] };

const relatedProductReducer = (state = defaultRelatedState, action) => {
  const currentState = { ...state };
  switch (action.type) {
    case RELATED_START:
      return { products: [], styles: [] };
    case SET_PRODUCTS_INFO:
      currentState.products.push(action.payload);
      return currentState;
    case SET_RELATED_STYLES:
      currentState.styles.push(action.payload);
      return currentState;
    default:
      return state;
  }
};

export default relatedProductReducer;
