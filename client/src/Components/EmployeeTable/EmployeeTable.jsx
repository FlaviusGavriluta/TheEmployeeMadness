import { Link } from "react-router-dom";
import { useState } from "react";
import "./EmployeeTable.css";
import { SearchBy } from "./SearchBy";
import { SortBy } from "./SortBy";
import { Edit } from "../Buttons/Edit";
import { Delete } from "../Buttons/Delete";

const EmployeeTable = ({ employees, onDelete }) => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("firstName");
  const [sortOrder, setSortOrder] = useState("asc");

  const parseName = (name) => {
    const names = name.split(" ");
    const firstName = names[0];
    const middleName = names.length > 2 ? names.slice(1, -1).join(" ") : "";
    const lastName = names[names.length - 1];
    return { firstName, middleName, lastName };
  };

  const filteredEmployees = employees
    ? employees
        .filter((employee) =>
          [employee.level, employee.position].some((field) =>
            field.toLowerCase().includes(search.toLowerCase())
          )
        )
        .sort((a, b) => {
          let comparison = 0;
          switch (sortBy) {
            case "level":
            case "position": {
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
        {/* <SearchBy onSearch={(search) => setSearch(search)} /> */}
        <table className="table">
          <SortBy
            setSortBy={setSortBy}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee._id}>
                <td className="ps-3">{employee.name}</td>
                <td>{employee.level}</td>
                <td>{employee.position}</td>
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
      </div>
    </section>
  );
};

export default EmployeeTable;
