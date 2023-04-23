import { Link } from "react-router-dom";
import "./EquipmentTable.css";
import { Edit } from "../Buttons/Edit";
import { Delete } from "../Buttons/Delete";

const EquipmentTable = ({ equipments, onDelete }) => (
  <section className="EquipmentTable">
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th className="ps-3">Name</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {equipments.map((equipment) => (
            <tr key={equipment._id}>
              <td className="ps-3">{equipment.name}</td>
              <td>{equipment.type}</td>
              <td>{equipment.amount}</td>
              <td>
                <div class="dropdown">
                  <button
                    class="btn"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <Link to={`/updateEquipment/${equipment._id}`}>
                        <Edit />
                      </Link>
                    </li>
                    <li className="text-danger">
                      <Delete onDelete={() => onDelete(equipment._id)} />
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default EquipmentTable;
