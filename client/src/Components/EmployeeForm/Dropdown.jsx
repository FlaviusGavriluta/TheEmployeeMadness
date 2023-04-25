export const Dropdown = ({ name, id, defaultValue, equipments }) => {
  return (
    <div className="control">
      <select name={name} id={id} defaultValue={defaultValue}>
        <option value="" disabled hidden>
          Select
        </option>
          {equipments?.map((equipment) => (
            <option key={equipment._id} value={equipment._id}>
              {equipment.name}
            </option>
          ))}
      </select>
    </div>

  );
};