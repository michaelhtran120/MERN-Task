import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <section id="home_page" className={styles.home_page}>
      <h1>MERN Task Manager</h1>
      <h2>A full stack portfolio project utilizing the MERN stack.</h2>
      <div className={styles.about_div}>
        <strong>About:</strong>
        <p>
          Visit the <a href="https://github.com/michaelhtran120/MERN-Task">Github Repo</a> for a readme file
        </p>
        <br />
        <strong>TLDR:</strong>
        <p>This was a project mainly focus on practicing my back-end knowledge with Express/MongoDB as well as Redux implementation</p>
      </div>
      <div className={styles.instruction_div}>
        <strong>Instructions:</strong>
        <p>Feel free create a new account or utilize a sample account.</p>
        <div className={styles.instruction_subdiv}>
          <strong>Sample Account Details</strong>
          <p>E-mail: admin@admin.com</p>
          <p>Password: admin</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
