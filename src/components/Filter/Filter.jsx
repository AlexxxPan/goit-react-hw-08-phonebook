import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilteredContacts } from 'redux/contacts/selectors';

function Filter() {
  const dispatch = useDispatch();
  const filterContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <p className={styles.name}>Find contacts by name</p>
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={filterContacts}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </>
  );
}

export default Filter;