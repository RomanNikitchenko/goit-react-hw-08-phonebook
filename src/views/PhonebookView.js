import ContactList from 'components/contactList/contactList';
import ContactForm from 'components/form/contactForm';
import Filter from 'components/filter/filter';

const Phonebook = () => {
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
