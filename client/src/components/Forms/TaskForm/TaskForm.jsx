// React & Library Imports
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux/slices/taskSlice";

// Component Imports
import LabelInput from "../../LabelInput/LabelInput";

function TaskForm() {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(inputs));
    setInputs({
      title: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <LabelInput inputId="title" label="Title" value={inputs.title} handleChange={handleChange} type="text" required autocomplete="off" />
      <LabelInput inputId="description" label="Description" value={inputs.description} handleChange={handleChange} type="text" required />
      {/* <label>Description</label>
      <textarea></textarea> */}
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
