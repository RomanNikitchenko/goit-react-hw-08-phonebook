import { createAction } from '@reduxjs/toolkit';

const filterChange = createAction('phonebook/filterChange');

const contactsActions = {
  filterChange,
};

export default contactsActions;
