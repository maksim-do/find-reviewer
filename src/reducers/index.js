import { combineReducers } from 'redux';
import filterDataReducer from './filterDataReducer';
import filterHideReducer from './filterHideReducer';
import answerDataReducer from './answerDataReducer';
import requestStateReducer from './requestStateReducer';
import answerUIStateReducer from './answerUIStateReducer';

export default combineReducers({
  filterData: filterDataReducer,
  filterHide: filterHideReducer,
  answerData: answerDataReducer,
  requestState: requestStateReducer,
  answerUIState: answerUIStateReducer,
});
