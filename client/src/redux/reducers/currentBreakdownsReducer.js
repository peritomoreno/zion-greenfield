const defaultState = {
  product_id: 0,
  ratings: {},
  recommended: {},
  characteristics: {}
};

const currentBreakdownsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_BREAKDOWNS':
      const { ratings } = action.payload;
      let num = 0;
      let agg = 0;

      for (let i = 1; i < 6; i += 1) {
        if (ratings[i] !== undefined) {
          num += ratings[i];
          agg += ratings[i] * i;
        }
      }

      const prodScore = Math.round((agg / num) * 10) / 10;
      let starPercentages = {};

      Object.keys(ratings).forEach((rating) => {
        starPercentages[rating] = Math.round((ratings[rating] / num) * 100);
      });

      Object.assign(action.payload, {
        productRating: prodScore,
        oneStar: starPercentages['1'],
        twoStars: starPercentages['2'],
        threeStars: starPercentages['3'],
        fourStars: starPercentages['4'],
        fiveStars: starPercentages['5']
      });

      return action.payload;
    default:
      return state;
  }
};

export default currentBreakdownsReducer;

// oneStar: ,
// twoStar: ,
// threeStar: ,
// fourStar: ,
// fiveStar:
