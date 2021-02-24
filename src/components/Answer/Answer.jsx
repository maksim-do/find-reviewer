import React from 'react';
import AnswerCardCurrentUser from './AnswerCardCurrentUser';
import AnswerCardContributors from './AnswerCardContributors';
import AnswerCardReviewer from './AnswerCardReviewer';
import AnswerNotAnswer from './AnswerNotAnswer';

// компонент отрисовывающий результаты поиска ревьювера
const Answer = (answerProps) => {
  const { data } = answerProps;
  const { result, response } = data;
  /* компонент формируется в зависимости от типа ответа, допускается что текущий пользователь
  может быть сам себе ревьювер */
  const answerData = {
    notQuery: () => null,
    error: (el) => (
      <AnswerNotAnswer text={el} />
    ),
    notAnswer: (el) => (
      <AnswerNotAnswer text={el} />
    ),
    answer: (el) => {
      const { reviewer, contributors, currentUser } = el;
      return (
        <>
          <AnswerCardCurrentUser user={currentUser} />
          {(reviewer === null || reviewer === undefined) && <AnswerNotAnswer text="The reviewer was not found" />}
          {(reviewer !== null) && <AnswerCardReviewer user={reviewer} />}
          <AnswerCardContributors contributors={contributors} />
        </>
      );
    },
  };
  const card = answerData[result](response);
  return card;
};

export default Answer;
