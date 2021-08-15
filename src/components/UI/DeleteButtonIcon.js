import React from 'react';
import { MdDelete } from 'react-icons/md';
import './DeleteButtonIcon.scss';

const DeleteButtonIcon = ({ onDelete }) => {
  return (
    <>
      <span className="delete-icon-button">
        <MdDelete onClick={onDelete} />
      </span>
    </>
  );
};

export default DeleteButtonIcon;
