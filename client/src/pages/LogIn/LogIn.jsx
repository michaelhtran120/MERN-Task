import React from "react";
import LogInForm from "../../components/Forms/LogInForm/LogInForm.jsx";

import styles from "./Login.module.css";

function LogIn() {
  return (
    <section id="login" className={styles.login_section}>

      <LogInForm />
    </section>
  );
}

export default LogIn;
