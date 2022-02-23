import React from "react";
import { dateFormatter } from "../../Utils/dateFormatter";

import styles from "./LabelInput.module.css";

function LabelInput({ inputId, label, value, handleChange, type, required = false, autocomplete = "false" }) {
  if (type === "date") {
    return (
      <div className={styles.form_group_date}>
        <label htmlFor={inputId}>{label}</label>
        <input
          type={type}
          name={inputId}
          id={inputId}
          value={value}
          onChange={handleChange}
          required={required}
          autoComplete={autocomplete}
          min={dateFormatter()}
        />
      </div>
    );
  }
  return (
    <div className={styles.form_group}>
      <label htmlFor={inputId}>{label}</label>
      <input type={type} name={inputId} id={inputId} value={value} onChange={handleChange} required={required} autoComplete={autocomplete} />
    </div>
  );
}

export default LabelInput;
