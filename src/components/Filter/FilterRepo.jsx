import React from 'react';
import cn from 'classnames';

const FilterRepo = (repoProps) => {
  const { value, onChange, valid } = repoProps;
  const classList = cn({
    'form-control': true,
    'is-invalid': valid,
  });
  return (
    <div className="form-group col-12 col-sm-6">
      <label htmlFor="repo" className="col-form-label">Repository</label>
      <input type="text" className={classList} value={value} onChange={onChange} name="repo" id="repo" />
      <div className="invalid-feedback">
        Please fill in the field.
      </div>
    </div>
  );
};

export default FilterRepo;
