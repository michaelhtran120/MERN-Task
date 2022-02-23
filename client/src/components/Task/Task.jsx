// React & Library imports
import React, { useEffect, useState } from "react";
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
    console.log(taskData);

    dispatch(toggleTaskComplete(taskData));
  };

  return (
    <div className={styles.task_container}>
      <div>
        <h3>{taskData.title}</h3>
        <p>{taskData.description}</p>
        <p>Due Date: </p>
        <input type="checkbox" checked={taskData.completed} onChange={() => toggleComplete(taskData)} />
        <label>completed?</label>
      </div>
      <button onClick={() => handleDelete(taskData._id)}>X</button>
    </div>
  );
}

export const MemoizedTask = React.memo(Task);
