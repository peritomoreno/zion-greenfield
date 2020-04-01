/* eslint-disable no-console */
const baseURL = 'http://3.134.102.30';

const fetchByURL = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (err) {
    return { error: err };
  }
};

const postByURL = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return { result: response.status === 201 };
  } catch (err) {
    return { error: err };
  }
};

const putByURL = async (url) => {
  try {
    const response = await fetch(url, { method: 'PUT' });
    return { result: response.status === 204 };
  } catch (err) {
    return { error: err };
  }
};

const QA = {
  fetchAllQuestions: (id) => {
    return fetchByURL(`${baseURL}/qa/${id}?count=100`);
    // return fetchByURL(`${baseURL}/qa/${id}`);
  },
  fetchAnswersByQuestion: (id) => {
    return fetchByURL(`${baseURL}/qa/${id}/answers`);
  },
  addQuestion: (id, question) => {
    // question
    // { body, name, email }
    return postByURL(`${baseURL}/qa/${id}`, question);
  },
  addAnswer: (id, answers) => {
    // answers
    // { body, name, email, photos }
    return postByURL(`${baseURL}/qa/${id}/answers`, answers);
  },
  markQuestionHelpful: (id) => {
    return putByURL(`${baseURL}/qa/question/${id}/helpful`);
  },
  reportQuestion: (id) => {
    return putByURL(`${baseURL}/qa/question/${id}/report`);
  },
  markAnswerHelpful: (id) => {
    return putByURL(`${baseURL}/qa/answer/${id}/helpful`);
  },
  reportAnswer: (id) => {
    return putByURL(`${baseURL}/qa/answer/${id}/report`);
  }
};

export default QA;
