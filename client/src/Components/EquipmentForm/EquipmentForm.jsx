const EquipmentForm = ({ onSave, disabled, onCancel }) => {
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
      <div className="control">
        <label htmlFor="name">Name:</label>
        <input
          defaultValue={null}
          name="name"
          id="name"
          className="form-control"
        />
      </div>

      <div className="control">
        <label htmlFor="type">Type:</label>
        <input
          defaultValue={null}
          name="type"
          id="type"
          className="form-control"
        />
      </div>

      <div className="control">
        <label htmlFor="amount">Amount:</label>
        <input
          defaultValue={null}
          name="amount"
          id="amount"
          className="form-control"
        />
      </div>

      <div className="buttons">
        <button className="btn btn-primary" type="submit" disabled={disabled}>
          Create Equipment
        </button>
        <button className="btn btn-danger" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EquipmentForm;
