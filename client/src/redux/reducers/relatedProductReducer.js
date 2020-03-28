const defaultState = [
  {
    id: 8,
    category: 'Kicks',
    name: 'YEasy 350',
    default_price: 450,
    thumbnail_url:
      'https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 6,
    category: 'Kicks',
    name: 'Pumped Up Kicks',
    default_price: 89,
    thumbnail_url:
      'https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 34,
    category: 'Tank Top',
    name: 'Peggie Tank Top',
    default_price: 645,
    thumbnail_url:
      'https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 50,
    category: 'Dress',
    name: 'Aubrey Dress',
    default_price: 966,
    thumbnail_url:
      'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 35,
    category: 'Hat',
    name: 'Kaylin Hat',
    default_price: 55,
    thumbnail_url:
      'https://images.unsplash.com/photo-1500699889581-a7f97ec155d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  }
];

const relatedProductReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_RELATED_PRODUCT':
      return action.payload;
    default:
      return state;
  }
};

export default relatedProductReducer;
