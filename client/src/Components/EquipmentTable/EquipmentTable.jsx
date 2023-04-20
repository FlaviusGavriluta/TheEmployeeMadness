import { Link } from "react-router-dom";
import "./EquipmentTable.css";
import { Edit } from "../Buttons/Edit";
import { Delete } from "../Buttons/Delete";

const EquipmentTable = ({ equipments, onDelete }) => (
  <div className="EquipmentTable">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Amount</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {equipments.map((equipment) => (
          <tr key={equipment._id}>
            <td>{equipment.name}</td>
            <td>{equipment.type}</td>
            <td>{equipment.amount}</td>
            <td>
              <Link to={`/updateEquipment/${equipment._id}`}>
                <Edit />
              </Link>
              <Delete onDelete={() => onDelete(equipment._id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default EquipmentTable;
