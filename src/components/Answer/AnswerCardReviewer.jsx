import React from 'react';
import { useSelector } from 'react-redux';
import AnswerNotAnswer from './AnswerNotAnswer';

const AnswerCardReviewer = () => {
  const data = useSelector((state) => state.answerData);
  const { reviewer, users } = data;
  if (reviewer === null) return <AnswerNotAnswer text="Reviewer not found" />;
  const user = users.find(({ id }) => id === reviewer);
  const imageSrc = user.avatar_url;

  return (
    <div className="card col-12 border-0">
      <div className="card-body fullHeight">
        <h4 className="card-title mt-3">Reviever</h4>
        <h5 className="card-subtitle mb-2">{user?.login}</h5>
        <img className="card-img-top" src={imageSrc} alt="Not found foto" />
      </div>
    </div>
  );
};

export default AnswerCardReviewer;
