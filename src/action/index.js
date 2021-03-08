import { createAction } from 'redux-actions';

export const changeValueRepo = createAction('CHANGE_VALUE_REPO');
export const changeValueUser = createAction('CHANGE_VALUE_USER');
export const filterHideToggle = createAction('FILTER_HIDE_TOGGLE');
export const updateTaskRequest = createAction('TASK_UPDATE_REQUEST');
export const updateTaskSuccess = createAction('TASK_UPDATE_SUCCESS');
export const updateTaskFailure = createAction('TASK_UPDATE_FAILURE');
export const addItemBlackList = createAction('ADD_ITEM_BLACKLIST');
export const removeItemBlackList = createAction('REMOVE_ITEM_BLACKLIST');
