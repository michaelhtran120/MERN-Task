import React, { useState } from "react";
import LabelInput from "../../LabelInput/LabelInput";
import styles from "./SignUpForm.module.css";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../../redux/slices/authSlice";
import { useEffect } from "react";

function SignUpForm() {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Destructure variables from input state.
  const { firstName, lastName, email, password, confirmPassword } = inputs;

  // useDispatch and useNavigate
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, errorMessage } = useSelector((state) => state.auth);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      console.log(errorMessage);
    }
    if (user) {
      navigate("/dashboard");
      // resets loading / error message state for user.
      dispatch(reset());
    }
  }, [user, errorMessage, navigate, dispatch]);

  // Component methods
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <>
      <form onSubmit={onSubmit} className={styles.signup_form}>
        <p className={styles.error_message}>{errorMessage ? errorMessage : ""}</p>
        <div className={styles.name_group}>
          <LabelInput
            label="First Name"
            handleChange={handleChange}
            inputId="firstName"
            type="text"
            value={firstName}
            required
            autocomplete="given-name"
          />
          <div className={styles.spacer} />
          <LabelInput
            label="Last Name"
            handleChange={handleChange}
            inputId="lastName"
            type="text"
            value={lastName}
            required
            autocomplete="family-name"
          />
        </div>
        <LabelInput label="E-Mail" handleChange={handleChange} inputId="email" type="email" value={email} required autocomplete="email" />
        <LabelInput
          label="Password"
          handleChange={handleChange}
          inputId="password"
          type="password"
          value={password}
          required
          autocomplete="new-password"
        />
        <LabelInput
          label="Confirm Password"
          handleChange={handleChange}
          inputId="confirmPassword"
          type="password"
          value={confirmPassword}
          required
          autocomplete="new-password"
        />
        <button type="submit"> Sign Up</button>
      </form>
    </>
  );
}

export default SignUpForm;
