import React, { useState } from "react";
import LabelInput from "../../LabelInput/LabelInput";
import styles from "./SignUpForm.module.css";

function SignUpForm() {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputs.password !== inputs.confirmPassword) {
      setError("Passwords do not match");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className={styles.signup_form}>
        <div className={styles.name_group}>
          <LabelInput label="First Name" handleChange={handleChange} inputId="firstName" type="text" value={inputs.firstName} required />
          <div className={styles.spacer} />
          <LabelInput label="Last Name" handleChange={handleChange} inputId="lastName" type="text" value={inputs.lastName} required />
        </div>
        <LabelInput label="E-Mail" handleChange={handleChange} inputId="email" type="email" value={inputs.email} required />
        <LabelInput label="Password" handleChange={handleChange} inputId="password" type="password" value={inputs.password} required />
        <LabelInput
          label="Confirm Password"
          handleChange={handleChange}
          inputId="confirmPassword"
          type="password"
          value={inputs.confirmPassword}
          required
        />
        <button type="submit"> Sign Up</button>
      </form>
    </>
  );
}

export default SignUpForm;
