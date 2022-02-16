import React from "react";
import SignUpForm from "../../components/Forms/SignUpForm/SignUpForm";

import styles from "./SignUp.module.css";

function SignUp() {
  return (
    <section id="signup" className={styles.signup_section}>
      <h1>MERN-Task Manager</h1>
      <h2>Sign Up Here!</h2>
      <SignUpForm />
    </section>
  );
}

export default SignUp;
