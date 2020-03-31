const defaultState = {
  product: 0,
  page: 0,
  count: 0,
  results: []
};

const currentReviewsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_REVIEWS':
      return action.payload;
    default:
      return state;
  }
};

export default currentReviewsReducer;
