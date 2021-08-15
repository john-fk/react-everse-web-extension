import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddButtonIcon from '../UI/AddButtonIcon';

const AddTask = ({ label, onAddTask }) => {
  const [userTaskText, setUserTaskText] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAddTask(userTaskText);
    setUserTaskText('');
  };

  return (
    <div className="task__add">
      <form
        className=" task__form"
        autoComplete="off"
        onSubmit={handleOnSubmit}
      >
        <input
          type="text"
          className="task__form-input  bg-none form-control mr-3 text-left "
          placeholder="Create a new task..."
          id="taskInput"
          value={userTaskText}
          onChange={(event) => setUserTaskText(event.target.value)}
        />
        {/* <label htmlFor="taskInput">{label}</label> */}
      </form>
      <AddButtonIcon
        onAdd={handleOnSubmit}
        isVisible={userTaskText.length > 0}
      />
    </div>
  );
};

// AddTask.defaultProps = { label: 'Add A New Task...' };
// AddTask.propTypes = { label: PropTypes.string };

export default AddTask;
