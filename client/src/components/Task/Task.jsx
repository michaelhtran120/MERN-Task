// React & Library imports
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Redux action imports
import { deleteTask, toggleTaskComplete } from "../../redux/slices/taskSlice";

// Styles import
import styles from "./Task.module.css";

// Helper imports
import { dateFormatter } from "../../Utils/dateFormatter";
import EditTaskForm from "../Forms/EditTaskForm/EditTaskForm";
// import Modal from "../Modal/Modal";
// import EditTaskForm from "../Forms/EditTaskForm/EditTaskForm";

function Task({ taskData }) {
  // const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const MySwal = withReactContent(Swal);

  const handleDelete = (id) => {
    console.log("deleting");
    dispatch(deleteTask(id));
  };

  const toggleComplete = (taskData) => {
    dispatch(toggleTaskComplete(taskData));
  };

  // const toggleEditModal = () => {
  //   if (!edit) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "scroll";
  //   }
  //   setEdit(!edit);
  // };

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
        <button
          onClick={() =>
            MySwal.fire({
              html: <EditTaskForm taskData={taskData} />,
              width: "40em",
              confirmButtonText: "Save",
              confirmButtonColor: "#34515e",
              confirmButtonAriaLabel: "Save",
              showCancelButton: true,
            }).then((result) => {
              if (result.isConfirmed) {
                console.log("save changes");
              }
            })
          }
          className={`${styles.edit_button} primary`}
        >
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
