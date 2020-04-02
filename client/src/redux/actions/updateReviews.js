import { Reviews } from '../../api';
import setReviews from './setReviews';

// Use API calls to init redux store

const filterNewest = (id) => ({
  type: `FILTER_BY_NEWEST`,
  payload: id
});
const filterHelpful = (id) => ({
  type: `FILTER_BY_HELPFUL`,
  payload: id
});
const filterRelevance = (id) => ({
  type: `FILTER_BY_RELEVANCE`,
  payload: id
});

export const filterByNewest = (id) => {
  return async (dispatch) => {
    const reviews = await Reviews.getReviews(id, 1, 'newest');
    dispatch(filterNewest(reviews.error ? [] : reviews));
  };
};

export const filterByHelpful = (id) => {
  return async (dispatch) => {
    const reviews = await Reviews.getReviews(id, 1, 'helpful');
    dispatch(filterHelpful(reviews.error ? [] : reviews));
  };
};

export const filterByRelevance = (id) => {
  return async (dispatch) => {
    const reviews = await Reviews.getReviews(id, 1, 'helpful');
    dispatch(filterRelevance(reviews.error ? [] : reviews));
  };
};

export const moreReviews = (id, sort, page) => {
  return async (dispatch) => {
    const reviews = await Reviews.getReviews(id, sort, page);
    dispatch(setReviews(reviews.error ? [] : reviews));
  };
};
