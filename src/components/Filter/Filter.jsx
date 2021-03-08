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
  const classList = cn({
    'border-0': true,
    'mt-2': true,
    'col-12': true,
    card: true,
    collapse: useSelector((state) => state.filterHide),
  });

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
