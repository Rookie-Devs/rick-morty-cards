import React, { useState, useEffect } from "react";
import "../css/index.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Searchbox from "./Searchbox";
import UserCardList from "./UserCardList";
import Pagination from "./Pagination";

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${search}`);
      const result = await response.json();

      setData(result.results);
      setPages(result.info.pages);
    };
    fetchData();
  }, [currentPage, search]);

  return (
    <>
      <Navbar />
      <div className="container">
        <Banner />
        <Searchbox search={search} setSearch={setSearch} />
        <UserCardList setData={setData} data={data} />
        <Pagination pages={pages} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
};

export default App;
