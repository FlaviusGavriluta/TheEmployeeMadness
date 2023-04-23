export const SortBy = ({ setSortBy, sortOrder, setSortOrder }) => {
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  return (
    <thead>
      <tr>
        <th>
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <button className="btn m-0 ps-2 fw-bold">Name</button>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    setSortBy("firstName");
                    toggleSortOrder();
                  }}
                >
                  First name{" "}
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    setSortBy("lastName");
                    toggleSortOrder();
                  }}
                >
                  Last name{" "}
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    setSortBy("middleName");
                    toggleSortOrder();
                  }}
                >
                  Middle name{" "}
                </a>
              </li>
            </ul>
          </div>
        </th>
        <th>
          <button
            className="btn m-0 p-0 fw-bold"
            onClick={() => {
              setSortBy("level");
              toggleSortOrder();
            }}
          >
            Level
          </button>
        </th>
        <th>
          <button
            className="btn m-0 p-0 fw-bold"
            onClick={() => {
              setSortBy("position");
              toggleSortOrder();
            }}
          >
            Position
          </button>
        </th>
        <th>Actions</th>
      </tr>
    </thead>
  );
};
