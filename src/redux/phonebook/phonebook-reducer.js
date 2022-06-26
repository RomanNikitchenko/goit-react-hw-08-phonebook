import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';
import operations from './phonebook-operations';


// const items = createReducer([], {
//   [actions.fetchContactSuccess]: (_, { payload }) => {
//     return payload
//   },
//   [actions.addContactSuccess]: (state, { payload }) => {
//     return [...state, payload];
//   },
//   [actions.deleteContactSuccess]: (state, { payload }) => {
//     return state.filter(contact => contact.id !== payload);
//   },
// });

const items = createReducer([], {
  [operations.fetchContacts.fulfilled]: (_, { payload }) => {
    return payload
  },
  [operations.addContact.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [operations.deleteContact.fulfilled]: (state, { payload }) => {
    return state.filter(contact => contact.id !== payload);
  },
});

const filter = createReducer('', {
  [actions.filterChange]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  items: items,
  filter: filter,
});
