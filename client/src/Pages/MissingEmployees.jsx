import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import EmployeeTable from "../Components/EmployeeTable/EmployeeTable";

const fetchEmployees = async () => {
  const response = await fetch("/api/employees/api/missing");
  return response.json();
};

const deleteEmployee = (id) => {
  return fetch(`/api/employees/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
};

const updateEmployee = async (employee) => {
  const response = await fetch(`/api/employees/${employee._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });
  const data = await response.json();
  return data;
};

const postData = {
  page: "/api/employees",
};

(async () => {
  try {
    await fetch("/api/views", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("Error making post request to views collection:", err);
  }
})();

const MissingEmployees = () => {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);
  const [isMissing, setIsMissing] = useState(false);

  const handleAttendance = (employee) => {
    employee.present = !employee.present
    setIsMissing(!isMissing)
    updateEmployee(employee)
}

  const handleDelete = (id) => {
    deleteEmployee(id);

    setEmployees((employees) => {
      return employees.filter((employee) => employee._id !== id);
    });
  };

  useEffect(() => {
    fetchEmployees().then((employees) => {
      setLoading(false);
      setEmployees(employees);
    });
  }, [isMissing]);

  if (loading) {
    return <Loading />;
  }

  return (
    <EmployeeTable
      employees={employees}
      onDelete={handleDelete}
      handleAttendance={handleAttendance}
    />
  );
};

export default MissingEmployees;
