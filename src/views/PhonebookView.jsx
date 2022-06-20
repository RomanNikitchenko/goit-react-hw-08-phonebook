import { useFetchContactsQuery } from 'redux/phonebook/contactSlice';

import ContactList from 'components/contactList/contactList';
import ContactForm from 'components/form/contactForm';
import Filter from 'components/filter/filter';

const Phonebook = () => {
  const { data } = useFetchContactsQuery();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {data && <ContactList />}
    </div>
  );
};

export default Phonebook;
