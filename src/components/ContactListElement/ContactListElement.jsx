import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/contactSlice';
import css from '../ContactListElement/ContactListElement.module.css';
import PropTypes from 'prop-types';

const ContactListElement = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contactLi}>
      <span className={css.contact}>{contact.name}:</span>
      <span className={css.contact}>{contact.number}</span>
      <button type="button" className={css.btnDelete} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

ContactListElement.propTypes = {
  contact: PropTypes.object,
};

export default ContactListElement;
