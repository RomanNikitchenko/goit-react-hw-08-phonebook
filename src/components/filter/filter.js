import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todosActions from 'redux/phonebook/phonebook-actions';

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
        onChange={evt => dispatch(todosActions.filterChange(evt.target.value))}
      />
    </label>
  );
};

export default Filter;
