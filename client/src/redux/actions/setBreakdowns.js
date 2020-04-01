const setCurrentBreakdowns = (metaData) => {
  return {
    type: `SET_CURRENT_BREAKDOWNS`,
    payload: metaData
  };
};

export default setCurrentBreakdowns;
