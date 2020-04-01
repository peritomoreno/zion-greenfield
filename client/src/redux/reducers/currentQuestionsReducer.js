const currentQuestionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_Questions':
      return action.payload;
    case 'REPORT_ANSWER':
      return state.map((question) => {
        const tmp = question;
        delete tmp.answers[action.payload];
        return tmp;
      });
    default:
      return state;
  }
};

export default currentQuestionsReducer;
