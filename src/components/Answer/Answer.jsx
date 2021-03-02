import React from 'react';
import AnswerCardCurrentUser from './AnswerCardCurrentUser';
import AnswerCardContributors from './AnswerCardContributors';
import AnswerCardReviewer from './AnswerCardReviewer';
import AnswerNotAnswer from './AnswerNotAnswer';

// компонент отрисовывающий результаты поиска ревьювера
const Answer = (answerProps) => {
  const { data } = answerProps;
  const { result, response } = data;
  /* 1 компонент формируется в зависимости от типа ответа, допускается что текущий пользователь
  может быть сам себе ревьювер
     2 переменную не инициализирую для явного выделения состояния 'notQuery',
     3 состояние 'error' выделил отдельно, планирую потом добавить отдельную логику обработки
     4 наличие секции default по стайлгайду обязательно */
  let content;
  switch (result) {
    case 'error':
    case 'notAnswer': {
      content = <AnswerNotAnswer text={response} />;
      break;
    }
    case 'notQuery': {
      content = null;
      break;
    }
    case 'answer': {
      const { reviewer, contributors, currentUser } = response;
      /* костыль с <AnswerNotAnswer text="Something went wrong" /> */
      content = reviewer === undefined
        ? <AnswerNotAnswer text="Something went wrong" />
        : (
          <>
            <AnswerCardCurrentUser user={currentUser} />
            {(reviewer === null) && <AnswerNotAnswer text="The reviewer was not found" />}
            {(reviewer !== null) && <AnswerCardReviewer user={reviewer} />}
            <AnswerCardContributors contributors={contributors} />
          </>
        );
      break;
    }
    default:
      content = <AnswerNotAnswer text="Something went wrong" />;
      break;
  }
  return content;
};

export default Answer;
