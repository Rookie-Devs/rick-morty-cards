import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/index.css";
import Banner from "../components/Banner";
import Searchbox from "../components/Searchbox";
import UserCardList from "../components/UserCardList";
import Pagination from "../components/Pagination";

const Home = () => {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(1);
  const [search, setSearch] = useState("");

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
    <>
      <div className="container">
        <Banner />
        <Searchbox search={search} setSearch={setSearch} />
        <UserCardList setData={setData} data={data} />
        <Pagination pages={pages} page={page} />
      </div>
    </>
  );
};

export default Home;
