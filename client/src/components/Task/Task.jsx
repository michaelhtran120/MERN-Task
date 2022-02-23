// React & Library imports
import React from "react";
import { useDispatch } from "react-redux";

// Component Imports
import { Modal } from "../Modal/Modal";

// Redux action imports
import { deleteTask, toggleTaskComplete } from "../../redux/slices/taskSlice";

// Styles import
import styles from "./Task.module.css";

// Helper imports
import { dateFormatter } from "../../Utils/dateFormatter";


function Task({ taskData }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log("deleting");
    dispatch(deleteTask(id));
  };

  const toggleComplete = (taskData) => {
    dispatch(toggleTaskComplete(taskData));
  };

  return (
    <>
      <div className={`${styles.task_container} ${taskData.completed && styles.completed}`}>
        <div>
          <h3>{taskData.title}</h3>
          <p>{taskData.description}</p>
          <p>
            <strong>Due Date: </strong>
            {taskData.dueDate ? dateFormatter(taskData.dueDate) : "No due date"}
          </p>
          <input type="checkbox" checked={taskData.completed} onChange={() => toggleComplete(taskData)} />
          <label>completed?</label>
        </div>
        <button onClick={() => handleDelete(taskData._id)} className={styles.delete_button}>
          X
        </button>
        <button onClick={() => Modal(taskData)} className={`${styles.edit_button} primary`}>
          Edit
        </button>
      </div>
    </>
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
