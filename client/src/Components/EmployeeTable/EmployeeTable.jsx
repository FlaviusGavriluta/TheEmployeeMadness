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
    <div className="EmployeeTable">
      {/* <SearchBy onSearch={(search) => setSearch(search)} /> */}
      <table>
        <SortBy
          setSortBy={setSortBy}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.level}</td>
              <td>{employee.position}</td>
              <td>
                <Link to={`/update/${employee._id}`}>
                  <Edit />
                </Link>
                <Delete onDelete={() => onDelete(employee._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
