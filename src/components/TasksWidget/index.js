import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { SubHeading } from '../UI/Heading';
import { showSuccessMessage } from '../../utils';
import store from 'store';
import './TaskWidget.scss';

const TasksWidget = () => {
  const [tasks, setTasks] = useState([]);
  const storageKey = 'Current_tasks';

  useEffect(() => {
    const storedTasks = store.get(storageKey);
    storedTasks && setTasks(storedTasks);
  }, []);

  useEffect(() => {
    store.set(storageKey, tasks);
  }, [tasks]);

  // Delete task from localStorage
  const deleteTask = (id) => {
    const confirmDelete = confirm('Are you sure you want to delete this task');
    confirmDelete && setTasks(tasks.filter((task) => task.id !== id));
    showSuccessMessage('Task has been deleted successfully.');
  };

  // Adds new task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;

    const newTask = { id, task };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <SubHeading
        text={`There are ${tasks.length > 0 ? tasks.length : 'no'} tasks to do`}
      />
      <div className="task mt-1">
        <AddTask onAddTask={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} />
      </div>
    </>
  );
};

export default TasksWidget;
