// React & Library Imports
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux/slices/taskSlice";

import styles from "./TaskForm.module.css";

// Component Imports
import LabelInput from "../../LabelInput/LabelInput";
import { useEffect } from "react";
import { dateFormatter } from "../../../Utils/dateFormatter";

function TaskForm() {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    dueDate: dateFormatter(),
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(inputs));
    setInputs({
      title: "",
      description: "",
      dueDate: new Date(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.task_form}>
      <LabelInput inputId="title" label="Title" value={inputs.title} handleChange={handleChange} type="text" required autocomplete="off" />
      <LabelInput inputId="description" label="Description" value={inputs.description} handleChange={handleChange} type="text" required />
      <LabelInput inputId="dueDate" label="Due Date" value={inputs.dueDate} handleChange={handleChange} type="date" />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
