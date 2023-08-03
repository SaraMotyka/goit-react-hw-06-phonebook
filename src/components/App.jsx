import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'Redux/actions';
import { selectFilter } from 'Redux/selectors';
import filteredContacts from './ContactList/ContactList';
export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFormSubmit = contact => {
    dispatch(addContact(contact));
  };

  const handleClick = id => {
    dispatch(deleteContact(id));
  };

  return (
    <section>
      <div className="content__container">
        <ContactForm addContact={handleFormSubmit} />
        <Filter filter={filter} />
        <ContactList contacts={filteredContacts} deleteContact={handleClick} />
      </div>
    </section>
  );
};

export default App;
