import React, { useState } from "react";
import LabelInput from "../../LabelInput/LabelInput";
import styles from "./LogInForm.module.css";

function LogInForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmit} className={styles.login_form}>
        <LabelInput label="E-Mail" handleChange={handleChange} inputId="email" type="email" value={inputs.email} required/>
        <LabelInput label="Password" handleChange={handleChange} inputId="password" type="password" value={inputs.password} required/>
        <button type="submit"> Log In</button>
      </form>
    </>
  );
}

export default LogInForm;
