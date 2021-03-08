import React from 'react';
import { useSelector } from 'react-redux';
import AnswerCardCurrentUser from './AnswerCardCurrentUser';
import AnswerCardContributors from './AnswerCardContributors';
import AnswerCardReviewer from './AnswerCardReviewer';
import AnswerNotAnswer from './AnswerNotAnswer';

// компонент отрисовывающий результаты поиска ревьювера
const Answer = () => {
  const requestState = useSelector((state) => state.answerUIState);
  if (requestState === null) return null;
  if (requestState === 'failure') return <AnswerNotAnswer text="Something went wrong" />;
  return (
    <>
      <AnswerCardCurrentUser />
      <AnswerCardReviewer />
      <AnswerCardContributors />
    </>
  );
};
export default Answer;

/*
<AnswerCardCurrentUser />
      <AnswerCardReviewer />
      */
