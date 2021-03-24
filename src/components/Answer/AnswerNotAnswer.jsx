import React from 'react';

const AnswerNotAnswer = (data) => {
  const { text } = data;
  return (
    <div className="card col-12 border-0">
      <div className="card-body">
        <div className="card-title"><h3>{text}</h3></div>
      </div>
    </div>
  );
};

export default AnswerNotAnswer;
