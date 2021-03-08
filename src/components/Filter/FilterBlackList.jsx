import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemBlackList, removeItemBlackList } from '../../action/index';

const isContainValue = (arr, el) => arr.map(({ value }) => value).includes(el);

const FilterElBlackList = (elProps) => {
  const { value, removeEl } = elProps;
  return (
    <a href="/#" className="list-group-item list-group-item-action" onClick={removeEl(value)}>{value}</a>
  );
};

const FilterBlackList = () => {
  const blackList = useSelector((state) => state.filterData.blackList);
  const dispatch = useDispatch();
  const inputEl = useRef(null);
  const handleAddItem = (e) => {
    e.preventDefault();
    const valueInput = inputEl.current.value;
    if (!isContainValue(blackList, valueInput) && valueInput !== '') {
      dispatch(addItemBlackList({ item: valueInput }));
    }
    inputEl.current.value = '';
    inputEl.current.focus();
  };

  const handleRemoveItem = (item) => (e) => {
    e.preventDefault();
    dispatch(removeItemBlackList({ item }));
  };

  const enterDown = (e) => {
    if (e.keyCode === 13) e.preventDefault();
  };

  const list = blackList.map((value) => (
    <FilterElBlackList
      key={value}
      value={value}
      removeEl={handleRemoveItem}
    />
  ));

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">BlackList</h5>
        <div className="row">
          <div className="col-8 input-group-sm col-md-10">
            <input type="text" onKeyPress={enterDown} className="form-control" ref={inputEl} name="addblacklist" id="addblacklist" />
          </div>
          <div className="col-4 col-md-2">
            <button type="button" onClick={handleAddItem} className="btn btn-sm btn-primary col-12">add</button>
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
