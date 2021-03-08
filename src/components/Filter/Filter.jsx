// компонент отвечающий за управление параметрами поиска
import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import FilterBlackList from './FilterBlackList';
import FilterRepo from './FilterRepo';
import FilterUserName from './FilterUserName';
import FilterShow from './FilterShow';
import FilterSubmit from './FilterSubmit';

function Filter() {
  //  const pathApi = `https://api.github.com/repos/${userNameValue}/${repoValue}/contributors`;
  //  const urlPathApi = new URL(pathApi);

  const classList = cn({
    'border-0': true,
    'mt-2': true,
    'col-12': true,
    card: true,
    collapse: useSelector((state) => state.filterHide),
  });

  /*
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
          setAnswer({ result: 'answer',
          response: { reviewer: result, contributors: data, currentUser: userNameValue } });
        } else {
          setAnswer({ result: 'notAnswer',
          response: `Error getting the list of contributors. Error ${respose.status}` });
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
*/
  return (
    <>
      <div className={classList}>
        <div className="card-body">
          <div className="row">
            <FilterUserName />
            <FilterRepo />
          </div>
          <FilterBlackList />
        </div>
      </div>
      <div className="card col-12 border border-0">
        <div className="card-body">
          <FilterSubmit />
          <FilterShow />
        </div>
      </div>
    </>
  );
}

export default Filter;
