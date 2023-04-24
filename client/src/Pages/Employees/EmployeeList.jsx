import { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import EmployeeTable from "../../Components/EmployeeTable";

const fetchEmployees = () => {
  return fetch("/api/employees").then((res) => res.json());
};

const fetchEquipments = () => {
  return fetch("/api/equipments").then((res) => res.json());
};

const fetchBrands = () => {
  return fetch("/api/brands").then((res) => res.json());
};

const deleteEmployee = (id) => {
  return fetch(`/api/employees/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
};

const updateEmployee = (employee) => {
  return fetch(`/api/employees/${employee._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  }).then((res) => res.json());
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

const EmployeeList = () => {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [equipments, setEquipments] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleAttendance = (employee) => {
    employee.present = !employee.present;
    updateEmployee(employee);
  };

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
    fetchEquipments().then((equipments) => setEquipments(equipments));
    fetchBrands().then((brands) => setBrands(brands));
  }, []);

  if (loading) {
    return <Loading />;
  }

  const incrementPage = () => {
    if (pageNumber * 10 >= employees.length) return;
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const decrementPage = () => {
    if (pageNumber === 1) return;
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  };

  return (
    <>
      <EmployeeTable
        employees={employees.slice((pageNumber - 1) * 7, pageNumber * 7)}
        onDelete={handleDelete}
        handleAttendance={handleAttendance}
        equipments={equipments}
        brands={brands}
      />
      <button onClick={decrementPage}>Prev</button>
      <button onClick={incrementPage}>Next</button>
    </>
  );
};

export default EmployeeList;
