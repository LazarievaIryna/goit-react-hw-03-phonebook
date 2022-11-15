import React from 'react';
import PropTypes from 'prop-types';
import { BtnDelete, Item } from './ContactItem.styled';
export const ContactItem = ({ id, name, number, deleteButton }) => {
  return (
    <>
      <Item key={id}>
        {name}: {number}
        <BtnDelete type="button" onClick={() => deleteButton(id)}>
          Delete
        </BtnDelete>
      </Item>
    </>
  );
};
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,

  deleteButton: PropTypes.func.isRequired,
};
