import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from 'components/redux/phonebook/contactSlice';
import phonebookReducer from 'components/redux/phonebook/phonebook-reducer';

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

export default store;
