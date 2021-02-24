import React from 'react';
//  пакет для формирования строки классов
import cn from 'classnames';

const FilterUserName = (userNameProps) => {
  const {
    value,
    onChange,
    valid,
  } = userNameProps;
  const classList = cn({
    'form-control': true,
    'is-invalid': valid,
  });
  return (
    <div className="form-group col-12 col-sm-6">
      <label htmlFor="username" className="col-form-label">Username</label>
      <input type="text" className={classList} value={value} onChange={onChange} name="username" id="username" />
      <div className="invalid-feedback">
        Please fill in the field.
      </div>
    </div>
  );
};

export default FilterUserName;
