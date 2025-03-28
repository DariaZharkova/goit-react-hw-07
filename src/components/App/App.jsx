import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';
import { fetchContacts } from '../../redux/operations';

export default function App() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && !error && <b>Request in progress...</b>}
      {!isLoading && error && <b>{error}</b>}
    </div>
  );
}
