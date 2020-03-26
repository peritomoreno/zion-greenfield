const currentStylesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_STYLES':
      return action.payload;
    default:
      return state;
  }
};

export default currentStylesReducer;
