import "./Layout.css";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <div className="sidebar">
      <div className="sidebar-brand">
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
      <div className="sidebar-menu text-light ">
        <ul>
          <li>
            <a className="active">
              <span className="las la-home"></span> <span>Dashboard</span>
            </a>
          </li>
          <li>
            
            <a className="">
              <span className="las la-users"></span> <span>Employees</span>
            </a>
          </li>
          <li>
            
            <a className="">
              <span className="las la-tools"></span> <span>Equipments</span>
            </a>
          </li>
          <li>
            
            <a className="">
              <span className="las la-concierge-bell"></span>
              <span>Attendance</span>
            </a>
          </li>
          <li>
            <a className="">
              <span className="las la-tasks"></span> <span>Tasks</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="main-content">
      <header>
        <h3 style={{ color: "#222" }}>
          <label htmlFor="">
            <span
              className="btn m-0 px-3 las la-bars"
              style={{ fontSize: "1.7rem", color: "#222" }}
            ></span>
          </label>
          Dashboard
        </h3>
        <div className="search-wrapper">
          <span className="las la-search"></span>
          <input type="search" placeholder="Search here" />
        </div>
        <div className="user-wrapper">
          <img src="user.jpg" width={"40px"} height={"40px"} alt="user" />
          <div>
            <h5 style={{ fontSize: "1rem" }}>
              <b>Flavius Dev</b>
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
