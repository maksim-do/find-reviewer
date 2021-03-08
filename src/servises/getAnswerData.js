import getContributors from './getContributors';
import getUser from './getUser';
import getReviewerData from './getReviewerData';
import { updateTaskSuccess, updateTaskFailure, updateTaskRequest } from '../action/index';

const getAnswerData = async (dispatch, getState) => {
  try {
    dispatch(updateTaskRequest());
    const state = getState();
    const { filterData } = state;
    const { user, repo, blackList } = filterData;
    console.log(filterData);
    localStorage.setItem('filterData', JSON.stringify(filterData));
    const contributorsData = await getContributors(user, repo);
    const contributors = contributorsData.map((el) => el.id);
    const userData = contributorsData.find((el) => el.login === user);
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
