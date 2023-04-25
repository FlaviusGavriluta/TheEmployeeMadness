import "./EmployeeForm.css";

export const Input = ({ defaultValue, name, id, label }) => (
  <div className="inputBox">
    <input
      defaultValue={defaultValue}
      name={name}
      id={id}
      required="required"
    />
    <span>{label}</span>
  </div>
);
