export const PaginationButtons = ({ pageNumber, setPageNumber, employees }) => {
  const incrementPage = () => {
    if (employees && pageNumber * 5 >= employees.length) return;
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const decrementPage = () => {
    if (pageNumber === 1) return;
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  };

  return (
    <div className="text-center">
      <button className="btn" onClick={decrementPage}>
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
      <button className="btn" onClick={incrementPage}>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
    </div>
  );
};
