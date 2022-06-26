import axios from "axios";
import actions from './phonebook-actions'

axios.defaults.baseURL = 'https://62aadd4ba62365888bce6cf4.mockapi.io/api/v1';

const fetchContacts = () => async dispatch => {
    dispatch(actions.fetchContactRequest());

    try {
        const { data } = await axios.get('/contacts')
        dispatch(actions.fetchContactSuccess(data));
    } catch (error) {
        dispatch(actions.fetchContactError(error))
    }

    // axios
    //     .get('/contacts')
    //     .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    //     .catch(error => dispatch(actions.fetchContactError(error)));
};


const addContact = ( name, number ) => async dispatch => {
    const contact = { name: name, phone: number };

    dispatch(actions.addContactRequest());

    try {
        const { data } = await axios.post('/contacts', contact)
        dispatch(actions.addContactSuccess(data));
    } catch (error) {
        dispatch(actions.addContactError(error))
    }
  
    // axios
    //     .post('/contacts', contact)
    //     .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    //     .catch(error => dispatch(actions.addContactError(error)));
};


const deleteContact = contactId => async dispatch => {
    dispatch(actions.deleteContactRequest());

    try {
        await axios.delete(`/contacts/${contactId}`)
        dispatch(actions.deleteContactSuccess(contactId))
    } catch (error) {
        dispatch(actions.deleteContactError(error))
    }

    // axios
    //     .delete(`/contacts/${contactId}`)
    //     .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    //     .catch(error => dispatch(actions.deleteContactError(error)));
};


const contactApi = {
    fetchContacts,
    addContact,
    deleteContact,
};

export default contactApi;
