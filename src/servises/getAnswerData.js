import getContributors from './getContributors';
import getUser from './getUser';
import getReviewerData from './getReviewerData';
import { updateTaskSuccess, updateTaskFailure, updateTaskRequest } from '../action/index';

// результы походов к api храним в нормализованном виде.
const getAnswerData = async (dispatch, getState) => {
  try {
    dispatch(updateTaskRequest());
    const state = getState();
    const { filterData } = state;
    const { user, repo, blackList } = filterData;
    localStorage.setItem('filterData', JSON.stringify(filterData));
    const contributorsData = await getContributors(user, repo);
    const contributors = contributorsData.map((el) => el.id);
    const userData = contributorsData.find((el) => el.login === user);
    // если в соавторах нет текущего юзера идем на бекенд
    const currentUserData = userData ?? await getUser(user);
    const current = currentUserData.id;
    const users = !userData
      ? [...contributorsData, currentUserData]
      : contributorsData;
    const reviewerData = getReviewerData(contributorsData, blackList);
    const reviewer = reviewerData.id;
    dispatch(updateTaskSuccess(
      {
        contributors,
        current,
        users,
        reviewer,
      },
    ));
  } catch {
    dispatch(updateTaskFailure());
  }
};

export default getAnswerData;
