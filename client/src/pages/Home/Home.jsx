import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <section id="home_page" className={styles.home_page}>
      <h1>MERN Task Manager</h1>
      <h2>A full stack portfolio project utilizing the MERN stack.</h2>
      <p>
        <span>About:</span>
      </p>
      <p>
        <span>Instructions:</span>
      </p>
    </section>
  );
}

export default Home;
