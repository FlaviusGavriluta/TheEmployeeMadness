export const Dropdown = ({ name, id, defaultValue, equipments }) => {
  return (
    <div className="selector control">
      <select name={name} id={id} defaultValue={defaultValue}>
        <option value="" selected={true} disabled="disabled">
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