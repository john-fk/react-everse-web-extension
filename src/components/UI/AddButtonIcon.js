import React from 'react';
import PropTypes from 'prop-types';
import { MdAdd } from 'react-icons/md';
import './AddButtonIcon.scss';

const AddButtonIcon = ({ iconContainerStyles, isVisible, onAdd }) => {
  return (
    <div style={iconContainerStyles}>
      <button
        className="add-icon-button"
        style={{ visibility: isVisible ? 'visible' : 'hidden' }}
        onClick={onAdd}
      >
        <MdAdd />
      </button>
    </div>
  );
};

AddButtonIcon.propTypes = { isVisible: PropTypes.bool };

export default AddButtonIcon;
