import { createAction } from '@reduxjs/toolkit';

const fetchContactRequest = createAction('phonebook/fetchContactRequest');
const fetchContactSuccess = createAction('phonebook/fetchContactSuccess');
const fetchContactError = createAction('phonebook/fetchContactError');

const addContactRequest = createAction('phonebook/addContactRequest');
const addContactSuccess = createAction('phonebook/addContactSuccess');
const addContactError = createAction('phonebook/addContactError');

const deleteContactRequest = createAction('phonebook/deleteContactRequest');
const deleteContactSuccess = createAction('phonebook/deleteContactSuccess');
const deleteContactError = createAction('phonebook/deleteContactError');


const filterChange = createAction('phonebook/filterChange');

const actions = {
  addContactRequest,
  addContactSuccess,
  addContactError,
  
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,

  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,

  filterChange,
};

export default actions;
