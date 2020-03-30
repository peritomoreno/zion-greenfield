const defaultState = [
  {
    review_id: 0,
    rating: 5,
    summary: 'Loading Reviews',
    recommend: 0,
    response: null,
    body: '...',
    date: '2020-02-26T00:00:00.000Z',
    reviewer_name: '',
    helpfulness: 0,
    photos: []
  }
];

const currentReviewsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PRODUCT':
      return action.payload;
    default:
      return state;
  }
};

export default currentReviewsReducer;
