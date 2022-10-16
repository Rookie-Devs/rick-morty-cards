import React, { useState, useEffect } from "react";
import "../css/index.css";
import UserCardList from "./UserCardList";
import Pagination from "./Pagination";
import Banner from "./Banner";
import Navbar from "./Navbar";

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const fetchData = async (pageNumber) => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
      const result = await response.json();

      setData(result.results);
      setPages(result.info.pages);
    };
    fetchData();
  }, [currentPage]);

  return (
    <>
      <Navbar />
      <div className="container">
        <Banner />
        <UserCardList setData={setData} currentItens={data} />
        <Pagination pages={pages} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
};

export default App;
