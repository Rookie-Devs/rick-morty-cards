import React from "react";

const FilterButton = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} className="filterButton">
        Filter
      </button>
    </>
  );
};

export default FilterButton;
