import ContactList from 'components/contactList/contactList';
import ContactForm from 'components/form/contactForm';
import Filter from 'components/filter/filter';
import contactApi from 'redux/phonebook/phonebook-operations'
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';


const Phonebook = () => {
  const dispatch = useDispatch();
  const [unmount, setUnmount] = useState(false);

  useEffect(() => {
    if (unmount === true) {
      return;
    }

    dispatch(contactApi.fetchContacts());

    return () => {
      setUnmount(true);
    };

  }, [dispatch, unmount]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Phonebook;
