import { Link } from "react-router-dom";

export const Sidebar = () => (
  <div className="sidebar">
    <div
      className="sidebar-brand text-light"
      style={{ padding: "1rem 0rem 1rem 0.5rem", height: "90px" }}
    >
      <div className="mt-2">
        <img
          src="Codecool.png"
          alt="logo"
          width="27"
          height="27"
          className="logo ms-3 mb-3"
        />
        <div
          className="logoText text-container d-inline-block ms-3"
          style={{ fontFamily: "sans-serif" }}
        >
          <p className="mb-0 p-0 fw-bold" style={{ fontSize: "16px" }}>
            JOURNEY
          </p>
          <p className="fw-bold" style={{ lineHeight: "0.6", fontSize: "8px" }}>
            BY CODECOOL
          </p>
        </div>
      </div>
    </div>
    <div className="sidebar-menu" style={{ marginTop: "1rem" }}>
      <ul>
        <li className="onActive">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <button className="btn">
              <span className="las la-home"></span> <span>Dashboard</span>
            </button>
          </Link>
        </li>
        <li>
          <Link to={"/employees"} style={{ textDecoration: "none" }}>
            <button className="btn">
              <span className="las la-users"></span> <span>Employees</span>
            </button>
          </Link>
        </li>
        <li>
          <Link to={"/equipments"} style={{ textDecoration: "none" }}>
            <button className="btn">
              <span className="las la-tools"></span> <span>Equipments</span>
            </button>
          </Link>
        </li>
        <li>
          <Link to={"/missing"} style={{ textDecoration: "none" }}>
            <button className="btn">
              <span className="las la-concierge-bell"></span>
              <span>Attendance</span>
            </button>
          </Link>
        </li>
        <li>
          <Link to={"/tasks"} style={{ textDecoration: "none" }}>
            <button className="btn">
              <span className="las la-tasks"></span> <span>Tasks</span>
            </button>
          </Link>
        </li>
        <li>
          <Link to={"/about"} style={{ textDecoration: "none" }}>
            <button className="btn">
              <span className="las la-address-card"></span> <span>About</span>
            </button>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);
