const defaultState = [];

const relatedProductReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_RELATED_PRODUCT':
      return action.payload;
    default:
      return state;
  }
};

export default relatedProductReducer;
