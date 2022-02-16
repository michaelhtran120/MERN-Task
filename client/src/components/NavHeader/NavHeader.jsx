import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

import styles from "./NavHeader.module.css";
import MenuButton from "./MenuButton/MenuButton";

function NavHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const handleLogOut = () => {
    dispatch(logout());
    dispatch(reset());
    console.log("clicked");
    navigate("/");
  };

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
            <p onClick={handleLogOut}>Log Out</p>
          </>
        ) : (
          <>
            <NavLink to="login">Log In</NavLink>
            <NavLink to="signup">Sign Up</NavLink>
          </>
        )}
      </nav>
      <nav className={styles.mobile_nav}>
        <div className={styles.logo}>
          <h1>MERN-Task</h1>
        </div>
        <MenuButton />
      </nav>
    </header>
  );
}

export default NavHeader;
