import "./Layout.css";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <div className="sidebar">
      <div
        className="sidebar-brand text-light"
        style={{ padding: "1rem 0rem 1rem 0.7rem", height: "90px" }}
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
            className="text-container d-inline-block ms-3"
            style={{ fontFamily: "sans-serif" }}
          >
            <p className="mb-0 p-0" style={{ fontSize: "16px" }}>
              <b>JOURNEY</b>
            </p>
            <p style={{ lineHeight: "0.6", fontSize: "8px" }}>
              <b>BY CODECOOL</b>
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
        </ul>
      </div>
    </div>
    <div className="main-content">
      <header>
        <h3 className="fw-bold" style={{ color: "#222" }}>
          <label htmlFor="">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <span
                className="btn m-0 px-3 las la-bars"
                style={{ fontSize: "1.7rem", color: "#222" }}
              ></span>
            </Link>
          </label>
          Dashboard
        </h3>

        <div className="input-group" style={{ width: "250px", height: "20px" }}>
          <input
            type="search"
            className="form-control rounded-start-pill"
            placeholder="Search here"
          />
          <button
            className="btn btn-light border-end border-top border-bottom rounded-end-pill"
            type="button"
            id="button-addon1"
          >
            <span className="las la-search"></span>
          </button>
        </div>

        <div className="user-wrapper">
          <img src="user.jpg" width={"40px"} height={"40px"} alt="user" />
          <div>
            <h5 className="m-0" style={{ fontSize: "1rem" }}>
              <b>Flavius Gav.</b>
            </h5>
            <small>Software developer</small>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  </>
);

export default Layout;
