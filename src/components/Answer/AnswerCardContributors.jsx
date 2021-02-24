import React from 'react';
//  простенький генератор id, без проверки
const getId = () => {
  const min = 0;
  const max = 1679615;
  const int = Math.floor(Math.random() * (max - min + 1)) + min;
  return int.toString(36);
};

const AnswerCardContributor = (data) => {
  const { user } = data;
  const { login } = user;
  const imageSrc = user.avatar_url;
  return (
    <div className="col">
      <div className="card h-100 border-0">
        <div className="card-body">
          <div className="card-title"><h5>{login}</h5></div>
          <img className="card-img-top" src={imageSrc} alt="Not found foto" />
        </div>
      </div>
    </div>
  );
};

const AnswerCardContributors = (data) => {
  const { contributors } = data;
  const listContributors = contributors.map((el) => {
    const id = getId();
    return <AnswerCardContributor key={id} user={el} />;
  });
  return (
    <div className="card col-12 border-0">
      <div className="card-body">
        <h4 className="card-title mt-5">The list of contributors</h4>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {listContributors}
        </div>
      </div>
    </div>
  );
};

export default AnswerCardContributors;
