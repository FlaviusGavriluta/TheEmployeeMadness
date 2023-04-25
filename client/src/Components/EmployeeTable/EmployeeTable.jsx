import { Link } from "react-router-dom";
import { useState } from "react";
import "./EmployeeTable.css";
import { HeaderTable } from "./HeaderTable";
import { Edit } from "../Buttons/Edit";
import { Delete } from "../Buttons/Delete";
import { Add } from "../Buttons/Add";
import { PaginationButtons } from "./PaginationButtons";

const EmployeeTable = ({
  employees,
  onDelete,
  handleAttendance,
  equipments,
  brands,
}) => {
  const [sortBy, setSortBy] = useState("firstName");
  const [sortOrder, setSortOrder] = useState("asc");
  const [pageNumber, setPageNumber] = useState(1);

  const parseName = (name) => {
    const names = name.split(" ");
    const firstName = names[0];
    const middleName = names.length > 2 ? names.slice(1, -1).join(" ") : "";
    const lastName = names[names.length - 1];
    return { firstName, middleName, lastName };
  };

  const sortedEmployees = employees
    ? employees.slice((pageNumber - 1) * 5, pageNumber * 5).sort((a, b) => {
        let comparison = 0;
        switch (sortBy) {
          case "level":
          case "position":
          case "equipment":
          case "brand": {
            const valueA = a[sortBy].toLowerCase();
            const valueB = b[sortBy].toLowerCase();
            comparison = valueA.localeCompare(valueB);
            break;
          }
          default: {
            const nameA = parseName(a.name)[sortBy].toLowerCase();
            const nameB = parseName(b.name)[sortBy].toLowerCase();
            comparison = nameA.localeCompare(nameB);
            break;
          }
        }
        return sortOrder === "asc" ? comparison : -comparison;
      })
    : [];

  return (
    <section className="EmployeeTable">
      <div className="container">
        <div className="text-end">
          <Link to={"/create"}>
            <Add buttonText={"+ Add employee"} />
          </Link>
        </div>
        <table className="table">
          <HeaderTable
            setSortBy={setSortBy}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
          <tbody>
            {sortedEmployees.map((employee) => (
              <tr key={employee._id}>
                <td className="ps-3">{employee.name}</td>
                <td className="status">
                  <input
                    type="checkbox"
                    defaultChecked={employee.present}
                    name="present"
                    id={`present_${employee._id}`}
                    onClick={() => handleAttendance(employee)}
                  />
                </td>
                <td>{employee.level}</td>
                <td>{employee.position}</td>
                <td>
                  {equipments &&
                  equipments.find(
                    (equipment) => equipment._id === employee.equipment
                  )
                    ? equipments &&
                      equipments.find(
                        (equipment) => equipment._id === employee.equipment
                      ).name
                    : ""}
                </td>
                <td>
                  {brands &&
                  brands.find((brand) => brand._id === employee.brand)
                    ? brands &&
                      brands.find((brand) => brand._id === employee.brand).name
                    : ""}
                </td>
                <td>{employee.favoriteColor}</td>
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
                        <Link to={`/update/${employee._id}`}>
                          <Edit />
                        </Link>
                      </li>
                      <li className="text-danger">
                        <Delete onDelete={() => onDelete(employee._id)} />
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
          employees={employees}
        />
      </div>
    </section>
  );
};

export default EmployeeTable;
