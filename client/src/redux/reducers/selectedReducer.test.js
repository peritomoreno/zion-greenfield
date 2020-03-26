import selectedReducer from './selectedReducer';
import { selectStyle, selectThumbnail } from '../actions/selected';

const initialState = {
  style: {
    foo: 'bar'
  },
  thumbnailIndex: 0
};
const newState = {
  style: {
    foo: 'baz'
  },
  thumbnailIndex: 1
};

beforeEach(() => {
  global.initialState = { ...initialState };
});

it('immutably reduces the SELECT_STYLE action', () => {
  const action = selectStyle(newState.style);
  const reducedState = selectedReducer(global.initialState, action);
  expect(reducedState.style).toEqual(newState.style); // ensure new state has updated style
  expect(reducedState).not.toBe(global.initialState); // ensure new state is a new object
  expect(global.initialState).toEqual(initialState); // ensure old state was not modified
});

it('immutably reduces the SELECT_THUMBNAIL action', () => {
  const action = selectThumbnail(newState.thumbnailIndex);
  const reducedState = selectedReducer(global.initialState, action);
  expect(reducedState.thumbnailIndex).toEqual(newState.thumbnailIndex);
  expect(reducedState).not.toBe(global.initialState);
  expect(global.initialState).toEqual(initialState);
});
