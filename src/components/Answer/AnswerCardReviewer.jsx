import React from 'react';
import { useSelector } from 'react-redux';
// import AnswerNotAnswer from './AnswerNotAnswer';
import imageNotFound from './notFound.jpg';

const AnswerCardReviewer = () => {
  const data = useSelector((state) => state.answerData);
  const { reviewer, users } = data;
  let login = 'Reviewer not found';
  let imageSrc = imageNotFound;
  if (reviewer !== null) {
    const user = users.find(({ id }) => id === reviewer);
    login = user?.login;
    imageSrc = user?.avatar_url;
  }

  return (
    <div className="card col-12 border-0">
      <div className="card-body fullHeight">
        <h4 className="card-title mt-3">Reviever</h4>
        <h5 className="card-subtitle mb-2">{login}</h5>
        <img className="card-img-top" src={imageSrc} alt="Not found foto" />
      </div>
    </div>
  );
};

export default AnswerCardReviewer;
