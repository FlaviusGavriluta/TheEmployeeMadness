import { useState, useEffect } from "react";

const Cards = () => {
  const [employeesCount, setEmployeesCount] = useState();
  const [viewsCount, setViewsCount] = useState();

  const fetchEmployees = () => {
    return fetch("/api/employees/employees-count").then((res) => res.json());
  };

  const fetchViews = () => {
    return fetch("/api/views/views-count").then((res) => res.json());
  };

  useEffect(() => {
    fetchEmployees().then((employeesCount) => {
      setEmployeesCount(employeesCount.count);
    });
    fetchViews().then((viewsCount) => {
      setViewsCount(viewsCount.count);
    });
  }, []);

  return (
    <div className="cards">
      <div className="card-single">
        <div>
          <h2 className="fw-bold">{employeesCount}</h2>
          <span>Employees</span>
        </div>
        <div>
          <span className="las la-users"></span>
        </div>
      </div>

      <div className="card-single">
        <div>
          <h2 className="fw-bold">78%</h2>
          <span>Attendance</span>
        </div>
        <div>
          <span className="las la-concierge-bell"></span>
        </div>
      </div>

      <div className="card-single">
        <div>
          <h2 className="fw-bold">{viewsCount}</h2>
          <span>Views</span>
        </div>
        <div>
          <span className="lab la-yelp"></span>
        </div>
      </div>

      <div className="card-single text-light d-inline-block p-3 text-center">
        <div>
          <span className="text-light">Experience</span>
        </div>
        <div>
          <span
            className="las la-circle-notch text-light"
            style={{ fontSize: "100px" }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
