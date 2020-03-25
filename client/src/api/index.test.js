import API from './index';

test('imports succeed', () => {
  expect(API).toBeDefined();
  expect(API.Product).toBeDefined();
  expect(API.Cart).toBeDefined();
  expect(API.QA).toBeDefined();
  expect(API.Review).toBeDefined();
});
