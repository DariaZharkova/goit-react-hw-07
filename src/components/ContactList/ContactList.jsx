import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filterByName = useSelector(state => state.filters.name);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterByName.toLowerCase())
  );
  return (
    <ul className={css.list}>
      {visibleContacts.map(item => (
        <li key={item.id} className={css.item}>
          <Contact item={item} />
        </li>
      ))}
    </ul>
  );
}
