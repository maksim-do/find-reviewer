const filterHide = (state = '', action) => {
  switch (action.type) {
    case 'FILTER_HIDE_TOGGLE':
      return !state;
    default:
      return state;
  }
};

export default filterHide;
