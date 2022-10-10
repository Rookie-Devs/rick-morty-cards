import React from "react";

const PaginationSelector = ({ itensPerPage, setItensPerPage }) => {
  return (
    <div>
      <select value={itensPerPage} onChange={(e) => setItensPerPage(Number(e.target.value))}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};

export default PaginationSelector;
