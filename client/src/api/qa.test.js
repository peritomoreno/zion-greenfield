import QA_API from './qa';

test('imports succeed', () => {
  expect(QA_API).toBeDefined();
  expect(QA_API.fetchAllQuestions).toBeDefined();
  expect(QA_API.fetchAnswersByQuestion).toBeDefined();
  expect(QA_API.addQuestion).toBeDefined();
  expect(QA_API.addAnswer).toBeDefined();
  expect(QA_API.markQuestionHelpful).toBeDefined();
  expect(QA_API.reportQuestion).toBeDefined();
  expect(QA_API.markAnswerHelpful).toBeDefined();
  expect(QA_API.reportAnswer).toBeDefined();
});
