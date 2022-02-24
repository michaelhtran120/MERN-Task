import React from "react";
import { Link } from "react-router-dom";

import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <section className={styles.not_found_section}>
      <h1 style={{ textAlign: "center" }}>Page not found</h1>
      <Link to="/">Click here to go to home page!</Link>
    </section>
  );
}

export default NotFound;
