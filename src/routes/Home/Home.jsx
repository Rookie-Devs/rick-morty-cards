import { useState, useEffect, useReducer } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import {
  Searchbox,
  FilterButton,
  Filter,
  Pagination,
  ButtonBackToTop,
  CardList,
} from '../../components';

import { SearchFilter, Loading, Error } from './Home.styles';

const INITIAL_STATE = {
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

  const [{ pages, name, status, gender }, dispatch] = useReducer(
    paramsReducer,
    {
      ...INITIAL_STATE,
    }
  );
  const [showFilter, setShowFilter] = useState(false);
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
  }, [name, status, gender]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&gender=${gender}`
      );
      const result = await response.json();

      dispatch({ type: 'SET_PAGES', payload: result.info.pages ?? 0 });
      return result.results ?? [];
    } catch (error) {
      return console.log(error.message);
    }
  };

  const { data, error, fetchStatus } = useQuery({
    queryKey: ['cards', page, name, status, gender],
    queryFn: fetchData,
    refetchOnWindowFocus: false,
    initialData: [],
    keepPreviousData: true,
    retry: 2,
  });

  return (
    <>
      <SearchFilter>
        <Searchbox search={search} setSearch={setSearch} />
        <FilterButton onClick={() => setShowFilter(!showFilter)} />
        {showFilter && (
          <Filter
            status={status}
            setStatus={setStatus}
            gender={gender}
            setGender={setGender}
          />
        )}
      </SearchFilter>
      {fetchStatus === 'fetching' && <Loading>Loading...</Loading>}
      {error && <Error>An error has occurred: {error.message}</Error>}

      <CardList data={data} />
      <Pagination pages={pages} page={page} />
      <ButtonBackToTop />
    </>
  );
};
