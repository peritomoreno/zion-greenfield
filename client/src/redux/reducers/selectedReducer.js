const defaultState = {
  style: {
    style_id: null,
    name: '',
    original_price: '',
    sale_price: '',
    'default?': null,
    photos: [],
    skus: {}
  },
  thumbnailIndex: null
};

const selectedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SELECT_STYLE':
      return { ...state, style: action.payload };
    case 'SELECT_THUMBNAIL':
      return { ...state, thumbnailIndex: action.payload };
    default:
      return state;
  }
};

export default selectedReducer;
