import { Dropdown, DropdownButton } from "react-bootstrap";

export const HeaderTable = ({ setSortBy, sortOrder, setSortOrder }) => {
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  return (
    <thead>
      <tr>
        <th>
          <DropdownButton id="dropdown-basic-button" title="Name">
            <Dropdown.Item
              href="#/action-1"
              onClick={() => {
                setSortBy("firstName");
                toggleSortOrder();
              }}
            >
              First name
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-2"
              onClick={() => {
                setSortBy("lastName");
                toggleSortOrder();
              }}
            >
              Last name
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              onClick={() => {
                setSortBy("middleName");
                toggleSortOrder();
              }}
            >
              Middle name
            </Dropdown.Item>
          </DropdownButton>
        </th>
        <th>Present</th>
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
        <th>
          <button
            className="btn m-0 p-0 fw-bold"
            onClick={() => {
              setSortBy("equipment");
              toggleSortOrder();
            }}
          >
            Equipment
          </button>
        </th>
        <th>
          <button
            className="btn m-0 p-0 fw-bold"
            onClick={() => {
              setSortBy("brand");
              toggleSortOrder();
            }}
          >
            Brand
          </button>
        </th>
        <th>Favorite Color</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
};
