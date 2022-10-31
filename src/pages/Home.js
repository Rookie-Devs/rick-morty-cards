import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/index.css";

import Banner from "../components/Banner";
import Searchbox from "../components/Searchbox";
import FilterButton from "../components/FilterButton";
import Filter from "../components/Filter";
import UserCardList from "../components/UserCardList";
import Pagination from "../components/Pagination";

const Home = () => {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(1);
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  let { page = 1 } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`);
      const result = await response.json();

      setData(result.results ?? []);
      setPages(result.info.pages ?? 0);
    };
    fetchData();
  }, [page, search]);

  return (
    <div className="container">
      <Banner />
      <div className="searchFilterContainer">
        <Searchbox search={search} setSearch={setSearch} />
        <FilterButton onClick={() => setShowFilter(!showFilter)} />
      </div>
      <div className="cardFilterContainer">
        <UserCardList setData={setData} data={data} />
        {showFilter && <Filter />}
      </div>
      <Pagination pages={pages} page={page} />
    </div>
  );
};

export default Home;
