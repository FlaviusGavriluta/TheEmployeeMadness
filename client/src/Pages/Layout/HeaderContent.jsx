import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

export const HeaderContent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    window.location.href = `/employees/${searchQuery}`;
  };

  return (
    <div className="header-content">
      <header>
        <h3 className="fw-bold" style={{ color: "#222" }}>
          <label htmlFor="nav-toggle">
            <span
              className="dashboardIcon btn las la-bars"
              style={{ fontSize: "1.7rem", color: "#222" }}
            ></span>
          </label>
          Dashboard
        </h3>
        <form onSubmit={handleSearchSubmit}>
          <div
            className="search-wrapper input-group"
            style={{ width: "250px", height: "20px" }}
          >
            <input
              type="search"
              className="form-control rounded-start-pill"
              placeholder="Search employees"
              onChange={handleInputChange}
            />
            <button
              className="btn btn-light border-end border-top border-bottom rounded-end-pill"
              type="submit"
              id="button-addon1"
            >
              <span className="las la-search"></span>
            </button>
          </div>
        </form>
        <div className="user-wrapper">
          <Link to={"/about"}>
            <img src="/user.jpg" width={"40px"} height={"40px"} alt="user" />
          </Link>
          <div>
            <h5 className="m-0 fw-bold " style={{ fontSize: "1rem" }}>
              Flavius Gav.
            </h5>
            <small>Software developer</small>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
