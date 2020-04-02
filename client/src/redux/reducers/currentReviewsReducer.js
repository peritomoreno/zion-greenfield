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
    case 'FILTER_BY_NEWEST':
      return action.payload;
    case 'FILTER_BY_HELPFUL':
      return action.payload;
    case 'FILTER_BY_RELEVANCE':
      return action.payload;
    case 'NEXT_REVIEW_PAGE':
      console.log(state);
      return action.payload;
    default:
      return state;
  }
};

export default currentReviewsReducer;
