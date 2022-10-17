import React from "react";

function Searchbox({ search, setSearch }) {
  const searchboxFilter = (e) => {
    const targetValue = e.target.value;
    setSearch(targetValue);
  };

  return (
    <div className="searchboxContainer">
      <label htmlFor="search" className="labelSearch">
        Search:
      </label>
      <input type="text" placeholder="Search here" className="searchInput" id="search" value={search} onChange={searchboxFilter}></input>
    </div>
  );
}

export default Searchbox;
