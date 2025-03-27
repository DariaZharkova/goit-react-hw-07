import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const value = useSelector(state => state.filters.name);

  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </div>
  );
}
