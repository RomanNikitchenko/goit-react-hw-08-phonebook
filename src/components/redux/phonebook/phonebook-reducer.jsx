import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from 'components/redux/phonebook/contsacts-actions';

const filter = createReducer('', {
  [actions.filterChange]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  filter: filter,
});
