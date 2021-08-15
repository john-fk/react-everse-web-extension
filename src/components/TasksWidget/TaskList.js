import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div className="task__list mt-4">
      <ul className="list-group mr-2 ">
        {tasks.map((item) => (
          <Task task={item} key={item.id} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
