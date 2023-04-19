export const SearchBy = ({ onSearch }) => (
  <div className="input-group">
    <input
      type="text"
      className="form-control m-2"
      placeholder="Search by level or position"
      onChange={({ target: { value } }) => onSearch(value)}
    />
  </div>
);
