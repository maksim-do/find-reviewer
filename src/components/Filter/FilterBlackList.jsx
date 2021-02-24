import React, { useState, useRef } from 'react';

const getId = () => {
  const min = 0;
  const max = 1679615;
  const int = Math.floor(Math.random() * (max - min + 1)) + min;
  return int.toString(36);
};

const isContainValue = (arr, el) => {
  const values = arr.map(({ value }) => value);
  return values.includes(el);
};

const FilterElBlackList = (elProps) => {
  const { id, value, removeEl } = elProps;
  return (
    <a href="/#" className="list-group-item list-group-item-action" onClick={removeEl(id)}>{value}</a>
  );
};

const FilterBlackList = (blackListProps) => {
  const [valueInput, setValue] = useState('');
  const inputEl = useRef(null);
  const onChange = (e) => { setValue(e.target.value); };
  const { blackList, addElBlackList, removeEl } = blackListProps;
  const onClick = (e) => {
    e.preventDefault();
    if (!isContainValue(blackList, valueInput) && valueInput !== '') {
      addElBlackList([{ id: getId(), value: valueInput }, ...blackList]);
    }
    setValue('');
    inputEl.current.focus();
  };

  const list = blackList.map(({ id, value }) => (
    <FilterElBlackList
      key={id}
      id={id}
      value={value}
      removeEl={removeEl}
    />
  ));

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">BlackList</h5>
        <div className="row">
          <div className="col-8 input-group-sm col-md-10">
            <input type="text" className="form-control" ref={inputEl} value={valueInput} onChange={onChange} name="addblacklist" id="addblacklist" />
          </div>
          <div className="col-4 col-md-2">
            <button type="button" onClick={onClick} className="btn btn-sm btn-primary col-12">add</button>
          </div>
          {(blackList.length > 0) && (
          <div className="list-group col-12 pl-3 mt-3">
            {list}
          </div>
          )}
        </div>

      </div>
    </div>

  );
};

export default FilterBlackList;
