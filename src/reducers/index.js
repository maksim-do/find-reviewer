import { combineReducers } from 'redux';
import filterDataReducer from './filterDataReducer';
import filterHideReducer from './filterHideReducer';
import answerDataReducer from './answerDataReducer';
import requestStateReducer from './requestStateReducer';
import answerStateReducer from './answerStateReducer';

export default combineReducers({
  filterData: filterDataReducer,
  filterHide: filterHideReducer,
  answerData: answerDataReducer,
  requestState: requestStateReducer,
  answerState: answerStateReducer,
});
