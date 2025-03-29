import { useDispatch, useSelector } from 'react-redux';
import { changeTheme, selectTheme } from '../../redux/localeSlice';
import { FaSyncAlt } from 'react-icons/fa';
import css from './Layout.module.css';

export const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const handleThemeChange = () => {
    dispatch(changeTheme());
  };

  return (
    <main className={`${css.container} theme-${theme}`}>
      <div className={css.wrap}>
        <h1 className={css.title}>Phonebook</h1>
        <button onClick={handleThemeChange}>
          <FaSyncAlt className={css.icon} />
        </button>
      </div>
      {children}
    </main>
  );
};
