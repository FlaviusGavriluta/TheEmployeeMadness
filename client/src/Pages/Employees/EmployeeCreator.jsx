import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeForm from "../../Components/EmployeeForm";

const createEmployee = (employee) => {
  return fetch("/api/employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  }).then((res) => res.json());
};

const fetchEquipments = () => {
  return fetch("/api/equipments").then((res) => res.json());
};

const fetchBrands = () => {
  return fetch("/api/brands").then((res) => res.json());
};

const EmployeeCreator = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [employeeLoading, setEmployeeLoading] = useState(true);
  const [equipments, setEquipments] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    setEmployeeLoading(false);
    fetchEquipments().then((equipments) => setEquipments(equipments));
    fetchBrands().then((brands) => setBrands(brands));
  });

  const handleCreateEmployee = (employee) => {
    setLoading(true);

    createEmployee(employee).then(() => {
      setLoading(false);
      navigate("/employees");
    });
  };

  return (
    <EmployeeForm
      onCancel={() => navigate("/employees")}
      disabled={loading}
      onSave={handleCreateEmployee}
      equipments={equipments}
      brands={brands}
    />
  );
};

export default EmployeeCreator;
