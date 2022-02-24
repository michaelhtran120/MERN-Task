// React & Lib import
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Redux Slice/Action import
import { updateTask } from "../../../redux/slices/taskSlice";
import { dateFormatter } from "../../../Utils/dateFormatter";

// Component import
import LabelInput from "../../LabelInput/LabelInput";

// styles import
import styles from "./EditTaskForm.module.css";

function EditTaskForm({ taskData, handleCloseModal }) {
  const [inputs, setInputs] = useState({
    title: taskData.title,
    description: taskData.description,
    dueDate: taskData.dueDate ? dateFormatter(taskData.dueDate) : "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let updatedData = {
      ...inputs,
      _id: taskData._id,
    };
    console.log(updatedData);
    // dispatch(updateTask(updatedData))
  };

  return (
    <form onSubmit={handleSubmit} className={styles.edit_task_form}>
      <LabelInput inputId="title" label="Title" value={inputs.title} handleChange={handleChange} type="text" required autocomplete="off" />
      <LabelInput inputId="description" label="Description" value={inputs.description} handleChange={handleChange} type="text" required />
      <LabelInput inputId="dueDate" label="Due Date" value={inputs.dueDate} handleChange={handleChange} type="date" />
      <div className={styles.button_container}>
        <button type="submit" className="primary">
          Save
        </button>
        <button type="button" className="secondary" onClick={handleCloseModal}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EditTaskForm;
