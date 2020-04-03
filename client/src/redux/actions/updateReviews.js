import { Reviews } from '../../api';
import setReviews from './setReviews';

// Use API calls to init redux store

const filterNewest = (reviews) => ({
  type: `FILTER_BY_NEWEST`,
  payload: reviews
});
const filterHelpful = (reviews) => ({
  type: `FILTER_BY_HELPFUL`,
  payload: reviews
});
const filterRelevance = (reviews) => ({
  type: `FILTER_BY_RELEVANCE`,
  payload: reviews
});
const nextPage = (reviews) => ({
  type: `NEXT_REVIEW_PAGE`,
  payload: reviews
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

export const moreReviews = (id, page, sort) => {
  return async (dispatch) => {
    const reviews = await Reviews.getReviews(id, page, sort);
    dispatch(nextPage(reviews.error ? [] : reviews));
  };
};
