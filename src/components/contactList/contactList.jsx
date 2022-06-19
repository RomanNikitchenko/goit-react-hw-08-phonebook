import ContactItem from 'components/contactItem/contactItem';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/phonebook/contactSlice';

const getNormalizedFilter = (filterValue, contacts) => {
  const normalizedFilter = filterValue.toLowerCase();

  const visibleTodos = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });

  return visibleTodos;
};

const ContactList = () => {
  const { data } = useFetchContactsQuery();
  const filterValue = useSelector(state => state.phonebook.filter);
  const visibleFilter = getNormalizedFilter(filterValue, data);

  return (
    <ul>
      {visibleFilter.map(({ id, name, phone }) => {
        return <ContactItem key={id} id={id} name={name} phone={phone} />;
      })}
    </ul>
  );
};

export default ContactList;
