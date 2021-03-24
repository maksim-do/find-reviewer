import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterHideToggle } from '../../action/index';

// переключатель видимости настроек фильтра

const FilterShow = () => {
  const value = useSelector(({ filterHide }) => filterHide);
  const dispatch = useDispatch();
  const handleChangeVisibility = () => {
    dispatch(filterHideToggle(value));
  };
  const status = value ? 'Show' : 'Hide';
  return (
    <button type="button" className="btn btn-info ml-4" onClick={handleChangeVisibility}>
      {status}
      {' '}
      filter
    </button>
  );
};

export default FilterShow;
