import React from 'react';

const AnswerCardReviewer = (data) => {
  const { user } = data;
  const { login } = user;
  const imageSrc = user.avatar_url;
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
