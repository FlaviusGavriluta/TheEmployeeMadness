const EquipmentForm = ({ onSave, disabled, equipment, onCancel }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = [...formData.entries()];
    console.log(entries);

    const equipment = entries.reduce((acc, entry) => {
      const [k, v] = entry;
      acc[k] = v;
      return acc;
    }, {});
    return onSave(equipment);
  };

  return (
    <form onSubmit={onSubmit}>
      {equipment && (
        <input type="hidden" name="_id" defaultValue={equipment._id} />
      )}

      <div className="control">
        <label htmlFor="name">Name:</label>
        <input
          defaultValue={equipment ? equipment.name : null}
          name="name"
          id="name"
          className="form-control"
        />
      </div>

      <div className="control">
        <label htmlFor="type">Type:</label>
        <input
          defaultValue={equipment ? equipment.type : null}
          name="type"
          id="type"
          className="form-control"
        />
      </div>

      <div className="control">
        <label htmlFor="amount">Amount:</label>
        <input
          defaultValue={equipment ? equipment.amount : null}
          name="amount"
          id="amount"
          className="form-control"
        />
      </div>

      <div className="buttons">
        <button className="btn btn-primary" type="submit" disabled={disabled}>
          {equipment ? "Update Equipment" : "Create Equipment"}
        </button>
        <button className="btn btn-danger" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EquipmentForm;
