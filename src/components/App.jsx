import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { addContact, deleteContact, setFilter } from './Redux/actions';
import { selectContacts, selectFilter } from './Redux/selectors';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';

export const App = () => {
  const myContacts = useSelector(selectContacts);
  const findName = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      dispatch(addContact(storedContacts));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(myContacts));
  }, [myContacts]);

  const addContactHandler = contact => {
    const loweredCase = contact.name.toLowerCase().trim();

    const exists = myContacts.some(
      contact => contact.name.toLowerCase().trim() === loweredCase
    );

    if (exists) {
      alert(`${contact.name} is already in contacts!`);
    } else {
      dispatch(addContact({ id: nanoid(), ...contact }));
    }
  };

  const addFilterHandler = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const filteredContacts =
    myContacts &&
    myContacts.filter(contact =>
      contact.name.toLowerCase().includes(findName.toLowerCase())
    );

  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
  };

  return (
    <section>
      <div className="content__container">
        <ContactForm addContact={addContactHandler} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContactHandler}
        >
          <Filter filter={findName} addFilter={addFilterHandler} />
        </ContactList>
      </div>
    </section>
  );
};

export default App;
