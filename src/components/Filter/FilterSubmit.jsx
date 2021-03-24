// кнопка отправки запроса
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getAnswerData from '../../servises/getAnswerData';

const FilterSubmit = () => {
  const requestState = useSelector((state) => state.requestState);
  const filterData = useSelector((state) => state.filterData);
  const dispatch = useDispatch();
  const { user, repo } = filterData;
  const isInvalidValueInputs = user === '' || repo === '';
  const disabled = requestState === 'request' || isInvalidValueInputs;
  const handlerGetAnswer = (e) => {
    e.preventDefault();
    dispatch(getAnswerData);
  };

  return (
    <button type="button" className="btn btn-primary" onClick={handlerGetAnswer} disabled={disabled}>find reviewer</button>
  );
};

export default FilterSubmit;
