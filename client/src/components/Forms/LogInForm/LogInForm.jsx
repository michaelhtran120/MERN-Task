import React, { useState, useEffect } from "react";
import LabelInput from "../../LabelInput/LabelInput";
import styles from "./LogInForm.module.css";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../../redux/slices/authSlice";

function LogInForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const { user, isLoading, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    console.log(errorMessage);
    console.log(isLoading);
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };
  if (isLoading) <h1>Loading....</h1>;

  return (
    <>
      <h1>MERN-Task Manager</h1>
      <h2>Log In Here!</h2>
      <form onSubmit={onSubmit} className={styles.login_form}>
        <p className={styles.error_msg}>{errorMessage ? errorMessage : ""}</p>
        <LabelInput label="E-Mail" handleChange={handleChange} inputId="email" type="email" value={inputs.email} required autocomplete="email" />
        <LabelInput
          label="Password"
          handleChange={handleChange}
          inputId="password"
          type="password"
          value={inputs.password}
          required
          autocomplete="current-password"
        />
        <button type="submit"> Log In</button>
      </form>
    </>
  );
}

export default LogInForm;
