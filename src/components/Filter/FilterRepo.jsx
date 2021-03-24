import React from 'react';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { changeValueRepo } from '../../action/index';

const FilterRepo = () => {
  const repo = useSelector((state) => state.filterData.repo);
  const dispatch = useDispatch();
  // контроль полей ввода
  const handleChangeRepoValue = (e) => {
    const value = e.target.value.trim().toLowerCase();
    dispatch(changeValueRepo({ text: value }));
  };
  const classList = cn({
    'form-control': true,
    'is-invalid': repo === '',
  });
  return (
    <div className="form-group col-12 col-sm-6">
      <label htmlFor="repo" className="col-form-label">Repository</label>
      <input type="text" className={classList} value={repo} onChange={handleChangeRepoValue} name="repo" id="repo" />
      <div className="invalid-feedback">
        Please fill in the field.
      </div>
    </div>
  );
};

export default FilterRepo;
