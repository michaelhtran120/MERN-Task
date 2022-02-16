import React from "react";
import LogInForm from "../../components/Forms/LogInForm/LogInForm.jsx";

import styles from "./Login.module.css";

function LogIn() {
  return (
    <section id="login" className={styles.login_section}>
      <h1>MERN-Task Manager</h1>
      <h2>Log In Here!</h2>
      <LogInForm />
    </section>
  );
}

export default LogIn;
