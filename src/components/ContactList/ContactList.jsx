import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operations';
import {
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from 'redux/selectors';
import { List, Item, Button } from './ContactList.styled';
import { Spinner } from 'components/Spinner';
import { selectFilter } from 'redux/filter/filterSelector';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const appliedFilter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const contactListNotificationStyle = {
    textAlign: 'center',
  };

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading &&
        filteredContacts.length === 0 &&
        !appliedFilter &&
        !error && (
          <h5 style={contactListNotificationStyle}>Phonebook is empty</h5>
        )}
      {appliedFilter && filteredContacts.length === 0 && (
        <h5 style={contactListNotificationStyle}>No matches found</h5>
      )}
      <List>
        {filteredContacts.map(({ id, name, phone }) => (
          <Item key={id}>
            <p>
              {name}: {phone}
            </p>
            <Button type="submit" onClick={() => handleDelete(id)}>
              Delete
            </Button>
          </Item>
        ))}
      </List>
    </>
  );
};
