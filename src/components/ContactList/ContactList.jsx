import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import {
  selectFilteredContacts,
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import styles from './ContactList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const filterState = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const sortedContacts = [...contacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const filteredContacts = () => {
    if (!filterState) {
      return sortedContacts;
    }
    return sortedContacts.filter(contact =>
      contact.name.toLowerCase().includes(filterState.toLowerCase())
    );
  };

  return (
    <ul>
      {isLoading && <Loader />}
      {filteredContacts().length === 0 && <p>You haven't found any contacts</p>}
      {filteredContacts().map(({ id, name, number }) => {
        return (
          <li key={id} className={styles.item}>
            <p className={styles.list}>
              {name} : {number}
            </p>
            <button
              className={styles.button}
              type="button"
              onClick={() =>
                dispatch(deleteContact(id))
                  .unwrap()
                  .then(({ name, id }) => {
                    alert(`${name} was deleted from contacts`);
                  })
                  .catch(rejectedValueOrSerializedError => {
                    console.log(rejectedValueOrSerializedError);
                  })
              }
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;


