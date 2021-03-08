const answerData = (state = null, action) => {
  switch (action.type) {
    case 'TASK_UPDATE_SUCCESS':
      return action.payload;
    case 'TASK_UPDATE_FAILURE':
      return null;
    default:
      return state;
  }
};

export default answerData;
