const currentQuestionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_Questions':
      return action.payload;
    default:
      return state;
  }
};

export default currentQuestionsReducer;
