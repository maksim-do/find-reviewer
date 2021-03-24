const answerStateReducer = (state = null, action) => {
  switch (action.type) {
    case 'TASK_UPDATE_SUCCESS':
      return 'success';
    case 'TASK_UPDATE_FAILURE':
      return 'failure';
    default:
      return state;
  }
};

export default answerStateReducer;
