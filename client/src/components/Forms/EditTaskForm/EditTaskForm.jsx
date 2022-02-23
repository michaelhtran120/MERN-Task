import React, { useState } from "react";
import LabelInput from "../../LabelInput/LabelInput";

// styles import
import styles from "./EditTaskForm.module.css";

function EditTaskForm({ taskData, toggleModal }) {
  const [inputs, setInputs] = useState({
    title: taskData.title,
    description: taskData.description,
    dueDate: taskData.dueDate,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.edit_task_form}>
      <LabelInput inputId="title" label="Title" value={inputs.title} handleChange={handleChange} type="text" required autocomplete="off" />
      <LabelInput inputId="description" label="Description" value={inputs.description} handleChange={handleChange} type="text" required />
      <LabelInput inputId="dueDate" label="Due Date" value={inputs.dueDate} handleChange={handleChange} type="date" />
    </form>
  );
}

export default EditTaskForm;
