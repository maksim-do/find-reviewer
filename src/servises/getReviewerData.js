import getRandomNumber from './getRandomNumber';

const getReviewerData = (listData, blackList) => {
  const userNotBlackList = listData
    .filter(({ login }) => !blackList.includes(login));
  const count = userNotBlackList.length;
  let result;
  switch (count) {
    case 0:
      result = null;
      break;
    case 1:
      [result] = userNotBlackList;
      break;
    default:
      result = userNotBlackList[getRandomNumber(count - 1)];
  }
  return result;
};

export default getReviewerData;
