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
  let getTest;
  switch (result) {
    case 'error': {
      getTest = (el) => (
        <AnswerNotAnswer text={el} />
      );
      break;
    }
    case 'notAnswer': {
      getTest = (el) => (
        <AnswerNotAnswer text={el} />
      );
      break;
    }
    case 'notQuery': {
      getTest = () => null;
      break;
    }
    case 'answer': {
      getTest = (el) => {
        const { reviewer, contributors, currentUser } = el;
        if (reviewer === undefined) {
          return () => (
            <AnswerNotAnswer text="Something went wrong" />
          );
        }
        return (
          <>
            <AnswerCardCurrentUser user={currentUser} />
            {(reviewer === null || reviewer === undefined) && <AnswerNotAnswer text="The reviewer was not found" />}
            {(reviewer !== null) && <AnswerCardReviewer user={reviewer} />}
            <AnswerCardContributors contributors={contributors} />
          </>
        );
      };
      break;
    }
    default:
      getTest = () => (
        <AnswerNotAnswer text="Something went wrong" />
      );
      break;
  }
  const card = getTest(response);
  return card;
};

export default Answer;
