import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../Redux/actions';
import { selectContacts } from '../Redux/selectors';
import css from './ContactList.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { Filter } from '../Filter/Filter';

export const ContactList = ({ id }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      <Filter />
      <ul className={css.contacts__list}>
        {contacts &&
          contacts.map(contact => (
            <li className={css.contacts__item} key={nanoid()}>
              <p className={css.contacts__name}>{contact.name}</p>
              <p className={css.contacts__number}> {contact.number}</p>
              <button
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
                className={css.contacts__btn}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),
  deleteContact: PropTypes.func,
};

export default ContactList;
