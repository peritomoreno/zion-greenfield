const defaultState = {
  id: null,
  name: '',
  slogan: '',
  description: '',
  category: '',
  default_price: '',
  features: []
};

const testState = {
  id: 30,
  name: 'Air Minis 250',
  slogan: 'Full court support',
  description:
    'This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.',
  category: 'Basketball Shoes',
  default_price: '0',
  features: [
    {
      feature: 'Sole',
      value: 'Rubber'
    },
    {
      feature: 'Material',
      value: 'FullControlSkin'
    }
  ]
};

const currentProductReducer = (state = testState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PRODUCT':
      return action.payload;
    default:
      return state;
  }
};

export default currentProductReducer;
