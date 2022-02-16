import React from "react";

import styles from "./LabelInput.module.css";

function LabelInput({ inputId, label, value, handleChange, type, required = false }) {
  return (
    <div className={styles.form_group}>
      <label htmlFor={inputId}>{label}</label>
      <input type={type} name={inputId} id={inputId} value={value} onChange={handleChange} required={required} />
    </div>
  );
}

export default LabelInput;
