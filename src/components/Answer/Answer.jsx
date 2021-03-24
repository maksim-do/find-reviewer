import React from 'react';
import { useSelector } from 'react-redux';
import AnswerCardCurrentUser from './AnswerCardCurrentUser';
import AnswerCardContributors from './AnswerCardContributors';
import AnswerCardReviewer from './AnswerCardReviewer';
import AnswerNotAnswer from './AnswerNotAnswer';

// компонент отрисовывающий результаты поиска ревьювера
const Answer = () => {
  const requestState = useSelector((state) => state.answerState);
  if (requestState === null) return null;
  if (requestState === 'failure') return <AnswerNotAnswer text="Something went wrong" />;
  return (
    <>
      <div className="card col-12 border-0">
        <div className="card-body">
          <h4 className="card-title mt-5">Search Result</h4>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <AnswerCardCurrentUser />
            <AnswerCardReviewer />
          </div>
        </div>
      </div>
      <AnswerCardContributors />
    </>
  );
};
export default Answer;
