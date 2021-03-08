import React from 'react';
import { useSelector } from 'react-redux';

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

const AnswerCardContributors = () => {
  const data = useSelector((state) => state.answerData);
  const { contributors, users } = data;
  const contributorsDataList = users.filter(({ id }) => contributors.includes(id));
  const listContributors = contributorsDataList
    .map((el) => <AnswerCardContributor key={el.id} user={el} />);
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
