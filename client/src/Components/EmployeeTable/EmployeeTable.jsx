import { Link } from "react-router-dom";
import { useState } from "react";
import "./EmployeeTable.css";

const EmployeeTable = ({ employees, onDelete }) => {
  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.level.toLowerCase().includes(search.toLowerCase()) ||
      employee.position.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="EmployeeTable">
      <div className="input-group">
        <input
          type="text"
          className="form-control m-2"
          placeholder="Search by level or position"
          value={search}
          onChange={handleSearch}
        />
      </div>
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
