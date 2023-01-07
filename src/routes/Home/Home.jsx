import { useState, useEffect, useReducer } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import {
  Searchbox,
  FilterButton,
  Filter,
  CardFront,
  CardBack,
  Pagination,
  ButtonBackToTop,
} from '../../components';

import './Home.scss';

const initialParams = {
  pages: 1,
  name: '',
  status: '',
  gender: '',
};

const paramsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PAGES':
      return { ...state, pages: action.payload };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_STATUS':
      return { ...state, status: action.payload };
    case 'SET_GENDER':
      return { ...state, gender: action.payload };
    default:
      return state;
  }
};

export const Home = () => {
  let { page = 1 } = useParams();

  const navigate = useNavigate();

  const [params, dispatch] = useReducer(paramsReducer, {
    ...initialParams,
  });
  const [showFilter, setShowFilter] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState('');

  const setStatus = newStatus => {
    dispatch({ type: 'SET_STATUS', payload: newStatus });
  };

  const setGender = newGender => {
    dispatch({ type: 'SET_GENDER', payload: newGender });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: 'SET_NAME', payload: search });
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  useEffect(() => {
    navigate('/page/1');
  }, [params.name, params.status, params.gender]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${params.name}&status=${params.status}&gender=${params.gender}`
      );
      const result = await response.json();

      dispatch({ type: 'SET_PAGES', payload: result.info.pages ?? 0 });
      return result.results ?? [];
    } catch (error) {
      return console.log(error.message);
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['cards', page, params.name, params.status, params.gender],
    queryFn: fetchData,
    refetchOnWindowFocus: false,
    initialData: [],
    keepPreviousData: true,
    retry: 2,
  });

  return (
    <div className="container">
      <div className="search-filter-container">
        <Searchbox search={search} setSearch={setSearch} />
        <FilterButton onClick={() => setShowFilter(!showFilter)} />
        {showFilter && (
          <Filter
            status={params.status}
            setStatus={setStatus}
            gender={params.gender}
            setGender={setGender}
          />
        )}
      </div>
      {isLoading && <div className="loading">Loading...</div>}
      {error && (
        <div className="error">An error has occurred: {error.message}</div>
      )}
      <CardFront data={data} setOpenModal={setOpenModal} />
      {openModal && (
        <CardBack
          data={data}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      <Pagination pages={params.pages} page={page} />
      <ButtonBackToTop />
    </div>
  );
};

// useEffect(() => {
//   const delayfetchData = setTimeout(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}`
//       );
//       const result = await response.json();

//       setData(result.results ?? []);
//       setPages(result.info.pages ?? 0);
//     };
//     fetchData();
//   }, 400);

//   return () => clearTimeout(delayfetchData);
// }, [page, search, status, gender]);

// const debounceFetchData = setTimeout(() => {

//   return () => clearTimeout(debounceFetchData);
// }, 400);
