import React from 'react';
import { useSelector  } from 'react-redux';
import css from './ContactList.module.css';
import ContactListElement from 'components/ContactListElement/ContactListElement';
import {selectContacts, selectFilter} from "Redux/selectors"


const filterContacts = (contacts, statusFilter) => {
  const normalizedFilter = statusFilter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  
  const contacts = useSelector(selectContacts);
  const statusFilter = useSelector(selectFilter);
  const filteredContacts = filterContacts(contacts, statusFilter);

  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      <ul className={css.contacts__list}>
        { filteredContacts.map(contact => (
              <ContactListElement key={contact.id} contact={contact} />
          ))}
      </ul>
    </div>
  );
};

export default ContactList;
