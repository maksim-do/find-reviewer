import { combineReducers } from 'redux';

const repo = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_VALUE_REPO':
      return action.payload.text;
    default:
      return state;
  }
};

const user = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_VALUE_USER':
      return action.payload.text;
    default:
      return state;
  }
};

const blackList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM_BLACKLIST':
      return [...state, action.payload.item];
    case 'REMOVE_ITEM_BLACKLIST':
      return state.filter((el) => el !== action.payload.item);
    default:
      return state;
  }
};

export default combineReducers({
  repo,
  user,
  blackList,
});
