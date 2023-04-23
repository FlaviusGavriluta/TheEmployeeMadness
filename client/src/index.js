import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Layout from "./Pages/Layout/Layout";
import ErrorPage from "./Pages/ErrorPage";
import EmployeeSearchList from "./Pages/Employees/EmployeeSearchList";
import EmployeeList from "./Pages/Employees/EmployeeList";
import EmployeeCreator from "./Pages/Employees/EmployeeCreator";
import EmployeeUpdater from "./Pages/Employees/EmployeeUpdater";
import EquipmentList from "./Pages/Equipments/EquipmentList";
import EquipmentCreator from "./Pages/Equipments/EquipmentCreator";
import EquipmentUpdater from "./Pages/Equipments/EquipmentUpdater";
import Dashboard from "./Pages/Dashboard/Dashboard";

import "./index.css";
import TableTest from "./Pages/TableTest";
import FormTest from "./Pages/FormTest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      { path: "/employees", element: <EmployeeList /> },
      {
        path: "/employees/:search",
        element: <EmployeeSearchList />,
      },
      {
        path: "/create",
        element: <EmployeeCreator />,
      },
      {
        path: "/equipments",
        element: <EquipmentList />,
      },
      {
        path: "/createEquipment",
        element: <EquipmentCreator />,
      },
      {
        path: "/update/:id",
        element: <EmployeeUpdater />,
      },
      {
        path: "/updateEquipment/:id",
        element: <EquipmentUpdater />,
      },
      {
        path: "/missing",
        element: <FormTest />,
      },
      {
        path: "/tasks",
        element: <TableTest />,
      },
      {
        path: "/about",
        element: <FormTest />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
