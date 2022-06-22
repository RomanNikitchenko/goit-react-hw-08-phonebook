import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';

const addContact = (state, payload) => {
  const contactsName = state.map(({ name }) => name.toLowerCase());

  if (contactsName.includes(payload.name.toLowerCase())) {
    return alert(`${payload.name} is already in contacts.`);
  } else {
    return [...state, payload];
  }
};

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    return addContact(state, payload);
  },
  [actions.deleteContact]: (state, { payload }) => {
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

//

// import { combineReducers } from 'redux';
// import types from './phonebook-types';

// const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       const contactsName = state.map(({ name }) => name.toLowerCase());

//       if (contactsName.includes(payload.name.toLowerCase())) {
//         return alert(`${payload.name} is already in contacts.`);
//       } else {
//         return [...state, payload];
//       }

//     case types.DELETE_CONTACT:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER_CHANGE:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   contacts: contacts,
//   filter: filter,
// });
