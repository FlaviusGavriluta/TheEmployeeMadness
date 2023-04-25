import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeForm from "../../Components/EmployeeForm";
import Loading from "../../Components/Loading";

const updateEmployee = (employee) => {
  return fetch(`/api/employees/${employee._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  }).then((res) => res.json());
};

const fetchEmployee = (id) => {
  return fetch(`/api/employees/${id}`).then((res) => res.json());
};

const fetchEquipments = () => {
  return fetch("/api/equipments").then((res) => res.json());
};

const fetchBrands = () => {
  return fetch("/api/brands").then((res) => res.json());
};

const EmployeeUpdater = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState([]);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [employeeLoading, setEmployeeLoading] = useState(true);
  const [equipments, setEquipments] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    setEmployeeLoading(true);
    fetchEmployee(id).then((employee) => {
      setEmployee(employee);
      setEmployeeLoading(false);
      fetchEquipments().then((equipments) => setEquipments(equipments));
      fetchBrands().then((brands) => setBrands(brands));
    });
  }, [id]);

  const handleUpdateEmployee = (employee) => {
    setUpdateLoading(true);
    updateEmployee(employee).then(() => {
      setUpdateLoading(false);
      navigate("/employees");
    });
  };

  if (employeeLoading) {
    return <Loading />;
  }

  return (
    <EmployeeForm
      employee={employee}
      onSave={handleUpdateEmployee}
      disabled={updateLoading}
      onCancel={() => navigate("/employees")}
      equipments={equipments}
      brands={brands}
    />
  );
};

export default EmployeeUpdater;
