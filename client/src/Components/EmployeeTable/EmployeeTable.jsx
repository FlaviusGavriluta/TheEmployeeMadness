import { Link } from "react-router-dom";
import { useState } from "react";
import "./EmployeeTable.css";
import { SearchBy } from "./SearchBy";

const EmployeeTable = ({ employees, onDelete }) => {
  const [search, setSearch] = useState("");

  const filteredEmployees = employees
    ? employees.filter((employee) =>
        [employee.level, employee.position].some((field) =>
          field.toLowerCase().includes(search.toLowerCase())
        )
      )
    : [];

  return (
    <div className="EmployeeTable">
      <SearchBy onSearch={(search) => setSearch(search)} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Level</th>
            <th>Position</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.level}</td>
              <td>{employee.position}</td>
              <td>
                <Link to={`/update/${employee._id}`}>
                  <button type="button">Update</button>
                </Link>
                <button type="button" onClick={() => onDelete(employee._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
