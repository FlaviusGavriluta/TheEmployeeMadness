import "./EmployeeForm.css";
import { Input } from "./Input";
import { Dropdown } from "./Dropdown";

const EmployeeForm = ({
  employee,
  onSave,
  disabled,
  onCancel,
  equipments,
  brands,
}) => {
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
            {employee ? "Update Employee" : "Create Employee"}
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
              value={employee?employee.salary:null}
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
             <Dropdown
              name="positions"
              id="positions"
              defaultValue={employee ? employee.positions : null}
              equipments={positions}
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
