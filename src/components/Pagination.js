import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ pages = [], setCurrentPage, key }) => {
  const buttonActive = (e) => {
    window.scrollTo({
      top: 630,
      behavior: "smooth",
    });
  };

  return (
    <div className="paginationContainer">
      {Array.from(Array(pages), (item, index) => {
        return (
          <Link to={`/${index + 1}`} className="buttonStyle" onClick={buttonActive} key={index}>
            {index + 1}
          </Link>
        );
      })}
    </div>
  );
};

export default Pagination;
