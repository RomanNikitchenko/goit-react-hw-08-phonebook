import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'redux/phonebook/contsacts-actions';

const Filter = () => {
  const value = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  return (
    <label>
      Name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={evt => dispatch(actions.filterChange(evt.target.value))}
      />
    </label>
  );
};

export default Filter;
