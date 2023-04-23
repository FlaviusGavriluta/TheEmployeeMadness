const RecentGrids = () => (
  <div className="recent-grid mt-5">
    <div className="favoriteBrands me-3">
      <div className="card border-0">
        <div className="card-header bg-transparent">
          <h6 className="fw-bold my-1">Favorite Brands</h6>
        </div>
        <div className="card-body my-1">
          <h6>BlaBla BLiBLi</h6>
        </div>
      </div>
    </div>
    <div className="tasks">
      <div className="card border-0">
        <div className="card-header bg-transparent">
          <h6 className="fw-bold my-1">Recent Tasks</h6>
        </div>
        <div className="card-body my-1">
          <div className="table-responsive">
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
                    <span className="status purple"></span> review
                  </td>
                </tr>
                <tr>
                  <td>Arrangement features</td>
                  <td>
                    <span className="status purple"></span> review
                  </td>
                </tr>
                <tr>
                  <td>Add Equipment</td>
                  <td>
                    <span className="status purple"></span> review
                  </td>
                </tr>
                <tr>
                  <td>The Search</td>
                  <td>
                    <span className="status purple"></span> review
                  </td>
                </tr>
                <tr>
                  <td>Employee Attendance</td>
                  <td>
                    <span className="status info"></span> in progress
                  </td>
                </tr>
                <tr>
                  <td>Assign equipment to any employee</td>
                  <td>
                    <span className="status orange"></span> pending
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default RecentGrids;
