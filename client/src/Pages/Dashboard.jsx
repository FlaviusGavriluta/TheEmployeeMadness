const Dashboard = () => (
  <>
    <div className="cards">
      <div className="card-single">
        <div>
          <h2 className="fw-bold">111</h2>
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
    <div className="recent-grid mt-5">
      <div className="favoriteBrands me-3">
        <div className="card border-0">
          <div className="card-header bg-transparent border-0">
            <h6 className="fw-bold">Favorite Brands</h6>
          </div>
          <div className="card-body"><h6>BlaBla BLiBLi</h6></div>
        </div>
      </div>
      <div className="tasks">
        <div className="card border-0">
          <div className="card-header bg-transparent border-0">
            <h6 className="fw-bold">Recent Tasks</h6>
          </div>
          <div className="card-body">
            <table>
              <thead>
                <tr>
                  <td>Project Tasks</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Filter features</td>
                  <td>
                    <span className="status"></span> review
                  </td>
                </tr>
                <tr>
                  <td>Arrangement features</td>
                  <td>
                    <span className="status"></span> review
                  </td>
                </tr>
                <tr>
                  <td>Add Equipment</td>
                  <td>
                    <span className="status"></span> review
                  </td>
                </tr>
                <tr>
                  <td>The Search</td>
                  <td>
                    <span className="status"></span> review
                  </td>
                </tr>
                <tr>
                  <td>Employee Attendance</td>
                  <td>
                    <span className="status"></span> in progress
                  </td>
                </tr>
                <tr>
                  <td>Assign equipment to any employee</td>
                  <td>
                    <span className="status"></span> pending
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Dashboard;
