import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavHeader.module.css";

function NavHeader() {
  const [user, setUser] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.left_links}>
        <div className={styles.logo}>
          <h1>MERN-Task</h1>
        </div>
        <NavLink to="/">Home</NavLink>
      </nav>
      <nav className={styles.right_links}>
        {user ? (
          <>
            <NavLink to="dashboard">Dashboard</NavLink>
          </>
        ) : (
          <>
            <NavLink to="login">Log In</NavLink>
            <NavLink to="signup">Sign Up</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}

export default NavHeader;
