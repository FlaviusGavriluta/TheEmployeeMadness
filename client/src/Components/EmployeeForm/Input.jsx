import React, { useState } from "react";
import "./EmployeeForm.css";

export const Input = ({ defaultValue, name, id, label, disabled }) => {
  const [value, setValue] = useState(defaultValue || "");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="inputBox">
      <input
        value={value}
        name={name}
        id={id}
        required="required"
        disabled={disabled}
        onChange={handleChange}
      />
      <span>{label}</span>
    </div>
  );
};
