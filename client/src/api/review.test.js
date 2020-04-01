import Review from './review';

test('imports succeed', () => {
  expect(Review).toBeDefined();
  expect(Review.getReviews).toBeDefined();
  expect(Review.getReviewsByHelpful).toBeDefined();
  expect(Review.getReviewsByRelevant).toBeDefined();
  expect(Review.getMetaData).toBeDefined();
  expect(Review.postReview).toBeDefined();
  expect(Review.markHelpful).toBeDefined();
  expect(Review.markReported).toBeDefined();
});
