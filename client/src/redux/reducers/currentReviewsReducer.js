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
      const newResults = state.results.concat(action.payload.results);
      const newState = Object.assign({}, state);
      newState.results = newResults;
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default currentReviewsReducer;
