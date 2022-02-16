import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

import styles from "./NavHeader.module.css";
import MenuButton from "./MenuButton/MenuButton";

function NavHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const handleMenuButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    dispatch(logout());
    dispatch(reset());
    setIsOpen(!isOpen);
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
        <MenuButton isOpen={isOpen} handleClick={handleMenuButtonClick} />
        <div className={isOpen ? styles.mobile_nav_menu_open : styles.mobile_nav_menu}>
          <NavLink to="/" onClick={handleMenuButtonClick}>
            Home
          </NavLink>
          {user ? (
            <>
              <NavLink to="dashboard" onClick={handleMenuButtonClick}>
                Dashboard
              </NavLink>
              <p onClick={handleLogOut}>Log Out</p>
            </>
          ) : (
            <>
              <NavLink to="login" onClick={handleMenuButtonClick}>
                Log In
              </NavLink>
              <NavLink to="signup" onClick={handleMenuButtonClick}>
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavHeader;
