import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  Searchbox,
  FilterButton,
  Filter,
  UserCardList,
  Pagination,
} from '../../components';

import './Home.scss';

export const Home = () => {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');

  let { page = 1 } = useParams();

  useEffect(() => {
    const delayfetchData = setTimeout(() => {
      const fetchData = async () => {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${statusFilter}&gender=${genderFilter}`
        );
        const result = await response.json();

        setData(result.results ?? []);
        setPages(result.info.pages ?? 0);
      };
      fetchData();
    }, 400);

    return () => clearTimeout(delayfetchData);
  }, [page, search, statusFilter, genderFilter]);

  return (
    <div className="container">
      <div className="searchFilterContainer">
        <Searchbox search={search} setSearch={setSearch} />
        <FilterButton onClick={() => setShowFilter(!showFilter)} />
        {showFilter && (
          <Filter
            setStatusFilter={setStatusFilter}
            setGenderFilter={setGenderFilter}
          />
        )}
      </div>
      <UserCardList setData={setData} data={data} />
      <Pagination pages={pages} page={page} />
    </div>
  );
};
