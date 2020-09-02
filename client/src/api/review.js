const baseURL = 'http://3.22.222.1';

const Reviews = {
  // functionalities to support
  // 1. Write new review
  //    a. Title/summary capped at 60 chars
  //    b. allow images and text in body, chars 50-1,000
  // 2. Get reviews
  //    Gets up to 4 at a time, allowing loading of increments of 2, while keeping
  //    next increment of 2 in store for responsiveness/conditional rendering logic
  //    a. See 2(c)
  // 3. Rating Breakdown & Product Breakdown
  //    Implemented through metadata fetch
  // 4. Mark helpful/report
  //    Implemented through puts

  getReviews: (id, currPage = 1, sort = 'relevant') => {
    return fetch(
      `${baseURL}/reviews/${id}/list/?page=${currPage}&count=4&sort=${sort}`
    ).then((res) => {
      return res.json();
    });
  },

  getMetaData: (id) => {
    return fetch(`${baseURL}/reviews/${id}/meta`)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.error('An error occured fetching metadata, ', err);
      });
  },

  postReview: (id, reviewObj) => {
    return fetch(`${baseURL}/reviews/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reviewObj)
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.error(err);
      });
  },

  markHelpful: (id) => {
    return fetch(`${baseURL}/reviews/helpful/${id}`, {
      method: 'PUT'
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.error(err);
      });
  },

  markReported: (id) => {
    return fetch(`${baseURL}/reviews/report/${id}`, {
      method: 'PUT'
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

export default Reviews;
