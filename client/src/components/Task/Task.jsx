// React & Library imports
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";

// Component Imports
import EditTaskModal from "../Modal/EditTaskModal/EditTaskModal";

// Redux action imports
import { toggleTaskComplete } from "../../redux/slices/taskSlice";

// Styles import
import styles from "./Task.module.css";

// Helper imports
import { dateFormatter } from "../../Utils/dateFormatter";

function Task({ taskData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  Modal.setAppElement("#root");

  const toggleComplete = (taskData) => {
    dispatch(toggleTaskComplete(taskData));
  };

  const handleOpenModal = () => {
    console.log("open");
    setIsModalOpen(true);
    console.log(taskData.dueDate);
    document.body.style.overflow = "hidden";
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <>
      <div className={`${styles.task_container} ${taskData.completed && styles.completed}`}>
        <div>
          <header className={styles.task_header}>
            <h3>{taskData.title}</h3>
            <span className={styles.due_date}>
              <strong>Due: </strong>
              {taskData.dueDate ? dateFormatter(taskData.dueDate) : "No due date"}
            </span>
          </header>
          <hr />
          <p>{taskData.description}</p>
          <hr />

          <input type="checkbox" checked={taskData.completed} onChange={() => toggleComplete(taskData)} />
          <label>completed?</label>
        </div>
        <button onClick={() => handleOpenModal()} className={`${styles.edit_button} primary`}>
          Edit
        </button>
      </div>
      <EditTaskModal taskData={taskData} isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
    </>
  );
}

export const renderTasks = (taskArr) => {
  console.log(taskArr);
  console.log(typeof taskArr);

  if (typeof taskArr === "object" && taskArr.length === 0) {
    return <h4>You currently have no tasks. Please fill out the above form</h4>;
  }
  if (typeof taskArr === "object" && taskArr.length > 0)
    return taskArr.map((task) => {
      return <Task key={task._id} taskData={task} />;
    });
};
