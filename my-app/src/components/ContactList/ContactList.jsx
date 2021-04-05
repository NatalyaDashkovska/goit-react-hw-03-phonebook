import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
const ContactList = ({ contacts, onDeleteCard }) => {
  return (
    <div>
      <ul className={styles.list}>
        {contacts.map(({ id, text, number }) => (
          <li key={id} className={styles.item}>
            <p className={styles.content}>
              {text} : {number}
            </p>
            <button className={styles.button} onClick={() => onDeleteCard(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};

export default ContactList;
