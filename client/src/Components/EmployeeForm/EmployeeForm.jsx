import "./EmployeeForm.css";
import { Input } from "./Input";
import { Dropdown } from "./Dropdown";
import { useState } from "react";

const EmployeeForm = ({
  employee,
  onSave,
  disabled,
  onCancel,
  equipments,
  brands,
}) => {
  const [checkSalary, setCheckSalary] = useState(employee.salary);

  const handleSalary = (e) => {
    setCheckSalary(e.target.value);
  };

  const setLevel = (salary) => {
    if (salary < 101) {
      return "Junior";
    } else if (salary > 100 && salary < 301) {
      return "Medior";
    } else if (salary > 300 && salary < 401) {
      return "Senior";
    } else if (salary > 400 && salary < 801) {
      return "Expert";
    } else return "godlike";
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = [...formData.entries()];

    const employee = entries.reduce((acc, entry) => {
      const [k, v] = entry;
      acc[k] = v;
      return acc;
    }, {});

    return onSave(employee);
  };

  return (
    <div className="mainForm container text-center">
      <div className="row justify-content-md-center">
        <form onSubmit={onSubmit} className="form">
          {employee && (
            <input type="hidden" name="_id" defaultValue={employee._id} />
          )}
          <h2 className="textForm text-dark text-center mx-3 pt-0 mt-0">
            Create Employee
          </h2>
          <div className="input-container">
            <Input
              defaultValue={employee ? employee.name : null}
              name="name"
              id="name"
              label="Name"
            />
            <Input
              defaultValue={employee ? employee.position : null}
              name="position"
              id="position"
              label="Position"
            />
            <Input
              value={setLevel(checkSalary)}
              name="level"
              id="level"
              label="Level"
              disabled
            />
            <Input
              defaultValue={employee ? employee.salary : null}
              name="salary"
              id="salary"
              label="Salary"
              onChange={handleSalary}
            />
            <Input
              defaultValue={employee ? employee.favoriteColor : null}
              name="favoriteColor"
              id="favoriteColor"
              label="Favorite Color"
            />
            <Dropdown
              name="equipment"
              id="equipment"
              defaultValue={employee ? employee.equipment : null}
              equipments={equipments}
            />
            <Dropdown
              name="brand"
              id="brand"
              defaultValue={employee ? employee.brand : null}
              equipments={brands}
            />
          </div>
          <div className="buttons pe-3 m-0 text-center">
            <button
              className="btn btn-info mt-5 p-2 mx-3"
              type="submit"
              disabled={disabled}
            >
              {employee ? "Update Employee" : "Create Employee"}
            </button>
            <button
              className="btn btn-secondary mt-5 p-2 mx-1"
              type="button"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
