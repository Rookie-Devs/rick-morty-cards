import React, { useState, useEffect } from "react";
import "../css/index.css";
import UserCardList from "./UserCardList";
import Pagination from "./Pagination";
import PaginationSelector from "./PaginationSelector";
import Navbar from "./Navbar";

const App = () => {
  const [data, setData] = useState([]);
  const [itensPerPage, setItensPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);

  // const startIndex = currentPage * itensPerPage;
  // const endIndex = startIndex + itensPerPage;
  // const currentItens = data.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchData = async (PageNumber) => {
      const response = await fetch("https://rickandmortyapi.com/api/character/?page=" + PageNumber);
      const result = await response.json();

      setData(result.results);
      setPages(result.info.pages);
    };
    fetchData(1);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [itensPerPage]);

  // getCharacter(1);

  return (
    <>
      <Navbar />
      <PaginationSelector itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} />
      <UserCardList setData={setData} currentItens={data} />
      <Pagination pages={pages} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default App;
