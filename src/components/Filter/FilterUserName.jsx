import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//  пакет для формирования строки классов
import cn from 'classnames';
import { changeValueUser } from '../../action/index';

const FilterUserName = () => {
  const value = useSelector((state) => state.filterData.user);
  const dispatch = useDispatch();
  // контроль полей ввода
  const handleChangeRepoValue = (e) => {
    const userName = e.target.value.trim().toLowerCase();
    dispatch(changeValueUser({ text: userName }));
  };
  const classList = cn({
    'form-control': true,
    'is-invalid': value === '',
  });
  return (
    <div className="form-group col-12 col-sm-6">
      <label htmlFor="username" className="col-form-label">Username</label>
      <input type="text" className={classList} value={value} onChange={handleChangeRepoValue} name="username" id="username" />
      <div className="invalid-feedback">
        Please fill in the field.
      </div>
    </div>
  );
};

export default FilterUserName;
