const defaultState = {
  id: null,
  name: '',
  slogan: '',
  description: '',
  category: '',
  default_price: '',
  features: []
};

const currentProductReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PRODUCT':
      return action.payload;
    default:
      return state;
  }
};

export default currentProductReducer;
