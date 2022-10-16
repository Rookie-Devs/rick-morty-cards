import React from "react";

const Pagination = ({ pages = [], setCurrentPage }) => {
  return (
    <div className="paginationContainer">
      {Array.from(Array(pages), (item, index) => {
        return (
          <button
            value={index + 1}
            className="buttonStyle"
            onClick={(e) => {
              window.scrollTo({
                top: 630,
                behavior: "smooth",
              });

              setCurrentPage(Number(e.target.value));
            }}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
