import { Outlet, Link } from "react-router-dom";

import "./Layout.css";

const Layout = () => (
  <div className="Layout">
    <nav>
      <ul>
        <li className="">
          <Link to="/">Employees</Link>
        </li>
        <li>/</li>
        <li className="grow">
          <Link to="/equipmentsList">Equipments</Link>
        </li>
        <li>
          <Link to="/createEquipment">
            <button className="btn btn-light btn-sm">Create Equipment</button>
          </Link>
        </li>
        <li>
          <Link to="/create">
            <button className="btn btn-light btn-sm">Create Employee</button>
          </Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
);

export default Layout;
