import "./EmployeeForm.css";

const EmployeeForm = ({ onSave, disabled, employee, onCancel }) => {
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
    <div className="mainForm">
      <form onSubmit={onSubmit}>
        {employee && (
          <input type="hidden" name="_id" defaultValue={employee._id} />
        )}
        <h2 className="textForm text-dark text-center mx-3 mt-3">
          Create Employee
        </h2>
        <div className="inputBox">
          <input
            defaultValue={employee ? employee.name : null}
            name="name"
            id="name"
            required="required"
          />
          <span>Name</span>
        </div>
        <div className="inputBox">
          <input
            defaultValue={employee ? employee.level : null}
            name="level"
            id="level"
            required="required"
          />
          <span>Level</span>
        </div>
        <div className="inputBox">
          <input
            defaultValue={employee ? employee.position : null}
            name="position"
            id="position"
            required="required"
          />
          <span>Position</span>
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
  );
};

export default EmployeeForm;
