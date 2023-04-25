import "./EquipmentForm.css";

const EquipmentForm = ({ onSave, disabled, equipment, onCancel }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = [...formData.entries()];

    const equipment = entries.reduce((acc, entry) => {
      const [k, v] = entry;
      acc[k] = v;
      return acc;
    }, {});
    return onSave(equipment);
  };

  return (
    <div className="mainForm">
      <form onSubmit={onSubmit}>
        {equipment && (
          <input type="hidden" name="_id" defaultValue={equipment._id} />
        )}
        <h2 className="textForm text-dark text-center mx-3 mt-3">
          {equipment? "Update Equipment":"Create Equipment"}
        </h2>
        <div className="input-container">
          {" "}
          <div className="inputBox">
            <input
              defaultValue={equipment ? equipment.name : null}
              name="name"
              id="name"
              required="required"
            />
            <span>Name</span>
          </div>
          <div className="inputBox">
            <input
              defaultValue={equipment ? equipment.type : null}
              name="type"
              id="type"
              required="required"
            />
            <span>Type</span>
          </div>
          <div className="inputBox">
            <input
              defaultValue={equipment ? equipment.amount : null}
              name="amount"
              id="amount"
              required="required"
            />
            <span>Amount</span>
          </div>
        </div>
        <div className="buttons pe-3 m-0 text-center">
          <button
            className="btn btn-info mt-5 p-2 mx-3"
            type="submit"
            disabled={disabled}
          >
            {equipment ? "Update Equipment" : "Create Equipment"}
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

export default EquipmentForm;
