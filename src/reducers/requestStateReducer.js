const answerData = (state = null, action) => {
  switch (action.type) {
    case 'TASK_UPDATE_SUCCESS':
      return 'success';
    case 'TASK_UPDATE_FAILURE':
      return 'failure';
    case 'TASK_UPDATE_REQUEST':
      return 'request';
    default:
      return state;
  }
};

export default answerData;
