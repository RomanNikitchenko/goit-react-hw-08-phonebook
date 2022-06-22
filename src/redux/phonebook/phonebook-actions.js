import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/addContact', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
});

const deleteContact = createAction('phonebook/deleteContact');

const filterChange = createAction('phonebook/filterChange');

const actions = {
  addContact,
  deleteContact,
  filterChange,
};

export default actions;

//

// import types from './phonebook-types';
// import { nanoid } from 'nanoid';

// const addContact = (name, number) => {
//   return {
//     type: types.ADD_CONTACT,
//     payload: {
//       id: nanoid(),
//       name: name,
//       number: number,
//     },
//   };
// };

// const deleteContact = Id => {
//   return {
//     type: types.DELETE_CONTACT,
//     payload: Id,
//   };
// };

// const filterChange = value => {
//   return {
//     type: types.FILTER_CHANGE,
//     payload: value,
//   };
// };

// export default { addContact, filterChange, deleteContact };
