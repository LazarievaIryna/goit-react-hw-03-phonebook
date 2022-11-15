import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contactList, onDeleteBtn }) => {
  return (
    <List>
      {contactList.map(({ name, number, id }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            id={id}
            deleteButton={onDeleteBtn}
          />
        );
      })}
    </List>
  );
};
ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteBtn: PropTypes.func.isRequired,
};
