import { useFetchContactsQuery } from 'redux/phonebook/contactSlice';

import ContactList from './contactList/contactList';
import ContactForm from './form/contactForm';
import Filter from './filter/filter';

const App = () => {
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

export default App;
