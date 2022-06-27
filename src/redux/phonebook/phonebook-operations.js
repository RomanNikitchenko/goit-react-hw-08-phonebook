import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
// import actions from './phonebook-actions'

// const fetchContacts = () => async dispatch => {
//     dispatch(actions.fetchContactRequest());

//     try {
//         const { data } = await axios.get('/contacts')
//         dispatch(actions.fetchContactSuccess(data));
//     } catch (error) {
//         dispatch(actions.fetchContactError(error))
//     }
// };

const fetchContacts = createAsyncThunk('phonebook/fetchContact', async () => {
    const { data } = await axios.get('/contacts');
    return data;
})


// const addContact = ( name, number ) => async dispatch => {
//     const contact = { name: name, phone: number };

//     dispatch(actions.addContactRequest());

//     try {
//         const { data } = await axios.post('/contacts', contact)
//         dispatch(actions.addContactSuccess(data));
//     } catch (error) {
//         dispatch(actions.addContactError(error))
//     }
// };

const addContact = createAsyncThunk('phonebook/addContact', async ({ name, number }) => {
    const contact = { name: name, number: number };
    const { data } = await axios.post('/contacts', contact)
    return data;
})


// const deleteContact = contactId => async dispatch => {
//     dispatch(actions.deleteContactRequest());

//     try {
//         await axios.delete(`/contacts/${contactId}`)
//         dispatch(actions.deleteContactSuccess(contactId))
//     } catch (error) {
//         dispatch(actions.deleteContactError(error))
//     }
// };

const deleteContact = createAsyncThunk('phonebook/deleteContact', async (contactId) => {
    await axios.delete(`/contacts/${contactId}`)
    return contactId;
})


const contactApi = {
    fetchContacts,
    addContact,
    deleteContact,
};

export default contactApi;
