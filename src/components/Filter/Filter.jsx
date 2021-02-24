// компонент отвечающий за управление параметрами поиска
import React, { useState, useLayoutEffect } from 'react';
import cn from 'classnames';
import FilterBlackList from './FilterBlackList';
import FilterRepo from './FilterRepo';
import FilterUserName from './FilterUserName';

const getRandomNumber = (max) => {
  const min = 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// кнопка отправки запроса
const FilterSubmit = (propsFilter) => {
  const { disabled, onClick } = propsFilter;
  return (
    <button type="button" className="btn btn-primary" onClick={onClick} disabled={disabled}>find reviewer</button>
  );
};

// переключатель видимости настроек фильтра
const FilterShow = (propsFilter) => {
  const { value, onClick } = propsFilter;
  const status = value ? 'Show' : 'Hide';
  return (
    <button type="button" className="btn btn-info ml-4" onClick={onClick}>
      {status}
      {' '}
      filter
    </button>
  );
};

function Filter(propsFilter) {
  const { setAnswer } = propsFilter;
  const [hide, setHide] = useState(false);
  const [userNameValue, setUserNameValue] = useState('');
  const [userNameValid, setUserNameValid] = useState(true);
  const [repoValue, setRepoValue] = useState('');
  const [repoValid, setRepoValid] = useState(true);
  const [blackList, setBlackList] = useState([]);
  const [fillingQuery, setFillingQuery] = useState(false);
  const pathApi = `https://api.github.com/repos/${userNameValue}/${repoValue}/contributors`;
  const urlPathApi = new URL(pathApi);
  // контроль полей ввода
  const changeRepoValue = (e) => {
    const value = e.target.value.trim();
    setRepoValue(value);
    setRepoValid(value === '');
  };

  const changeUserNameValue = (e) => {
    const value = e.target.value.trim();
    setUserNameValue(value);
    setUserNameValid(value === '');
  };

  // изменение видимости настроек
  const changeVisibility = () => {
    setHide(!hide);
  };

  // удаление юзера из блэклиста
  const removeElBlackList = (key) => (e) => {
    e.preventDefault();
    setBlackList(blackList.filter(({ id }) => id !== key));
  };

  const classList = cn({
    'border-0': true,
    'mt-2': true,
    'col-12': true,
    card: true,
    collapse: hide,
  });

  // валидация формы, вычисляемое значение поэтому в состояния не заносим
  const inValidForm = userNameValid || repoValid || fillingQuery;

  // запрос и формирование состояния ответа,
  // допускается что текущий юзер может быть сам себе ревьювером
  const getAnswer = (e) => {
    e.preventDefault();
    setFillingQuery(true);
    if ((inValidForm)) return;
    const query = async () => {
      try {
        const respose = await fetch(urlPathApi);
        if (respose.ok) {
          const data = await respose.json();
          const usersBlackList = blackList.map(({ value }) => value.toLowerCase());
          const userNotBlackList = data
            .filter(({ login }) => !usersBlackList.includes(login));
          const count = userNotBlackList.length;
          let result;
          switch (count) {
            case 0:
              result = null;
              break;
            case 1:
              [result] = userNotBlackList;
              break;
            default:
              result = userNotBlackList[getRandomNumber(count)];
          }
          setAnswer({ result: 'answer', response: { reviewer: result, contributors: data, currentUser: userNameValue } });
        } else {
          setAnswer({ result: 'notAnswer', response: `Error getting the list of contributors. Error ${respose.status}` });
        }
      } catch (_err) {
        setAnswer({ result: 'error', response: `Error: ${_err.message}.` });
      }
      const filterState = {
        hide,
        userNameValue,
        userNameValid,
        repoValue,
        repoValid,
        blackList,
      };
      localStorage.setItem('filterState', JSON.stringify(filterState));
      setFillingQuery(false);
    };
    query();
  };

  const enterDown = (e) => {
    if (e.keyCode === 13) e.preventDefault();
  };

  //  исключаем мерцание при отрисовке  - используем useLayoutEffect
  useLayoutEffect(() => {
    const filterState = JSON.parse(localStorage.getItem('filterState'));

    if (filterState !== null) {
      setHide(filterState.hide);
      setUserNameValue(filterState.userNameValue);
      setUserNameValid(filterState.userNameValid);
      setRepoValue(filterState.repoValue);
      setRepoValid(filterState.repoValid);
      setBlackList(filterState.blackList);
    }
  }, []);

  return (
    <>
      <div className={classList}>
        <div className="card-body">
          <div className="row">
            <FilterUserName
              value={userNameValue}
              valid={userNameValid}
              onChange={changeUserNameValue}
            />
            <FilterRepo
              value={repoValue}
              valid={repoValid}
              onChange={changeRepoValue}
            />
          </div>
          <FilterBlackList
            blackList={blackList}
            addElBlackList={setBlackList}
            onKeyDown={enterDown}
            removeEl={removeElBlackList}
          />
        </div>
      </div>
      <div className="card col-12 border border-0">
        <div className="card-body">
          <FilterSubmit disabled={inValidForm} onClick={getAnswer} />
          <FilterShow value={hide} onClick={changeVisibility} />
        </div>
      </div>
    </>
  );
}

export default Filter;
