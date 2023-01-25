import { useState, useEffect, useReducer } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import {
  Searchbox,
  FilterButton,
  Filter,
  Pagination,
  ButtonBackToTop,
  CardList,
} from '../../components';

import { SearchFilter, Loading, Error } from './Home.styles';

const ACTIONS_TYPES = {
  SET_PAGES: 'SET_PAGES',
  SET_NAME: 'SET_NAME',
  SET_STATUS: 'SET_STATUS',
  SET_GENDER: 'SET_GENDER',
};

const INITIAL_STATE = {
  pages: 1,
  name: '',
  status: '',
  gender: '',
};

const paramsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SET_PAGES:
      return { ...state, pages: action.payload };
    case ACTIONS_TYPES.SET_NAME:
      return { ...state, name: action.payload };
    case ACTIONS_TYPES.SET_STATUS:
      return { ...state, status: action.payload };
    case ACTIONS_TYPES.SET_GENDER:
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
    INITIAL_STATE
  );
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState('');

  const handleNavigate = () => navigate('/page/1');

  const setStatus = newStatus => {
    handleNavigate();
    dispatch({ type: ACTIONS_TYPES.SET_STATUS, payload: newStatus });
  };

  const setGender = newGender => {
    handleNavigate();
    dispatch({ type: ACTIONS_TYPES.SET_GENDER, payload: newGender });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search) {
        handleNavigate();
      }
      dispatch({ type: ACTIONS_TYPES.SET_NAME, payload: search });
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const fetchData = async () => {
    const response = await axios(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&gender=${gender}`
    );
    dispatch({
      type: ACTIONS_TYPES.SET_PAGES,
      payload: response.data.info.pages ?? 0,
    });
    return response.data.results ?? [];
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
