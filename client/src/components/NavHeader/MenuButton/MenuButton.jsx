import React, { useEffect, useState } from "react";
import "./MenuButton.css";

function MenuButton({ isOpen, handleClick }) {
  return (
    <div className={`hamburger_lines ${isOpen ? "open" : ""}`} onClick={handleClick}>
      <span className="line line1"></span>
      <span className="line line2"></span>
      <span className="line line3"></span>
    </div>
  );
}

export default MenuButton;
