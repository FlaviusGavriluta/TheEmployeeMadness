import { Link } from "react-router-dom";
import { useState } from "react";
import "./EquipmentTable.css";
import { Edit } from "../Buttons/Edit";
import { Delete } from "../Buttons/Delete";
import { Add } from "../Buttons/Add";
import { PaginationButtons } from "../EmployeeTable/PaginationButtons";

const EquipmentTable = ({ equipments, onDelete }) => {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <section className="EquipmentTable">
      <div className="container">
        <div className="text-end">
          <Link to={"/createEquipment"}>
            <Add buttonText={"+ Add equipment"} />
          </Link>
        </div>
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
            {equipments
              .slice((pageNumber - 1) * 5, pageNumber * 5)
              .map((equipment) => (
                <tr key={equipment._id}>
                  <td className="ps-3">{equipment.name}</td>
                  <td>{equipment.type}</td>
                  <td>{equipment.amount}</td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                      </button>
                      <ul className="dropdown-menu">
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
        <PaginationButtons
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          employees={equipments}
        />
      </div>
    </section>
  );
};

export default EquipmentTable;
