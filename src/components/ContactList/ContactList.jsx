import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectFilter } from '../../Redux/selectors';
import css from './ContactList.module.css';
import ContactListElement from 'components/ContactListElement/ContactListElement';

const filterContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  // const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = filterContacts(contacts, filter);

  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      <ul className={css.contacts__list}>
        {filteredContacts &&
          filteredContacts.map(contact => (
            <li key={contact.id}>
              <ContactListElement contact={contact} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactList;
