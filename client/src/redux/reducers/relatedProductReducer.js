import {
  SET_PRODUCTS_INFO,
  SET_RELATED_STYLES,
  RELATED_START,
  SET_RELATED_RATING
} from '../actions/related';

const defaultRelatedState = { products: [], styles: [] };

function calculateRatingFromReview(ratings) {
  let num = 0;
  let agg = 0;

  for (let i = 1; i < 6; i += 1) {
    if (ratings[i] !== undefined) {
      num += ratings[i];
      agg += ratings[i] * i;
    }
  }

  return Math.round((agg / num) * 10) / 10;
}

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
    case SET_RELATED_RATING:
      return {
        ...state,
        products: state.products.map((product) => {
          return {
            ...product,
            rating: calculateRatingFromReview(action.payload)
          };
        })
      };
    default:
      return state;
  }
};

export default relatedProductReducer;
