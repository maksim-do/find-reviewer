const filterDataLocalStorage = JSON.parse(localStorage.getItem('filterData'));
const filterData = {
  repo: '',
  user: '',
  blackList: [],
};
const state = {
  filterData: { ...filterData, ...filterDataLocalStorage },
  filterHide: false,
  answerData: {
    reviewer: null,
    current: null,
    contributors: [],
    users: [],
  },
  answerState: null,
  requestState: null,
};

export default state;
