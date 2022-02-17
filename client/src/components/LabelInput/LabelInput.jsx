import React from "react";

import styles from "./LabelInput.module.css";

function LabelInput({ inputId, label, value, handleChange, type, required = false, autocomplete = null }) {
  return (
    <div className={styles.form_group}>
      <label htmlFor={inputId}>{label}</label>
      <input type={type} name={inputId} id={inputId} value={value} onChange={handleChange} required={required} autoComplete={autocomplete} />
    </div>
  );
}

export default LabelInput;
