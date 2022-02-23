// React & Library imports
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Redux action imports
import { deleteTask, toggleTaskComplete } from "../../redux/slices/taskSlice";

// Styles import
import styles from "./Task.module.css";

function Task({ taskData }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log("deleting");
    dispatch(deleteTask(id));
  };

  const toggleComplete = (taskData) => {
    dispatch(toggleTaskComplete(taskData));
  };

  const dateFormatter = (date) => {
    const year = new Date(date).getUTCFullYear();
    const month = new Date(date).getUTCMonth() + 1;
    const dateVal = new Date(date).getUTCDate();
    return `${month} - ${dateVal} - ${year}`;
  };

  return (
    <div className={styles.task_container}>
      <div>
        <h3>{taskData.title}</h3>
        <p>{taskData.description}</p>
        <p>Due Date: {taskData.dueDate ? dateFormatter(taskData.dueDate) : "No due date"}</p>
        <input type="checkbox" checked={taskData.completed} onChange={() => toggleComplete(taskData)} />
        <label>completed?</label>
      </div>
      <button onClick={() => handleDelete(taskData._id)} className={styles.delete_button}>
        X
      </button>
      <button className={`${styles.edit_button} primary`}>Edit</button>
    </div>
  );
}

export const renderTasks = (taskArr) => {
  if (taskArr.length === 0) {
    return <h4>You currently have no tasks. Please fill out the above form</h4>;
  }
  return taskArr.map((task) => {
    return <Task key={task._id} taskData={task} />;
  });
};
