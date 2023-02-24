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

type Actions = {
  type: ACTIONS_TYPES;
  payload: string | number;
};

type State = {
  pages: number;
  name: string;
  status: string;
  gender: string;
};

export type Card = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  episode: string[];
};

enum ACTIONS_TYPES {
  SET_PAGES = 'SET_PAGES',
  SET_NAME = 'SET_NAME',
  SET_STATUS = 'SET_STATUS',
  SET_GENDER = 'SET_GENDER',
}

const INITIAL_STATE = {
  pages: 1,
  name: '',
  status: '',
  gender: '',
};

const payloadNumber = (state: State, payload: unknown) => {
  if (typeof payload === 'number') {
    return { ...state, pages: payload };
  } else {
    return { ...state };
  }
};

const payloadString = (state: State, payload: unknown, propetyName: string) => {
  if (typeof payload === 'string') {
    return { ...state, [propetyName]: payload };
  } else {
    return { ...state };
  }
};

const paramsReducer = (state: State, action: Actions): State => {
  const { payload, type } = action;
  switch (type) {
    case ACTIONS_TYPES.SET_PAGES:
      return payloadNumber(state, payload);
    case ACTIONS_TYPES.SET_NAME:
      return payloadString(state, payload, 'name');
    case ACTIONS_TYPES.SET_STATUS:
      return payloadString(state, payload, 'status');
    case ACTIONS_TYPES.SET_GENDER:
      return payloadString(state, payload, 'gender');
    default:
      return state;
  }
};

export const Home = () => {
  const { page = 1 } = useParams();

  const navigate = useNavigate();

  const [{ pages, name, status, gender }, dispatch] = useReducer(
    paramsReducer,
    INITIAL_STATE
  );
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState('');

  const handleNavigate = () => navigate('/page/1');

  const setStatus = (newStatus: string) => {
    handleNavigate();
    dispatch({ type: ACTIONS_TYPES.SET_STATUS, payload: newStatus });
  };

  const setGender = (newGender: string) => {
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

  const fetchData = async (): Promise<Card[]> => {
    const response = await axios(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&gender=${gender}`
    );
    dispatch({
      type: ACTIONS_TYPES.SET_PAGES,
      payload: response.data.info.pages ?? 0,
    });
    return response.data.results;
  };

  const { data, error, fetchStatus } = useQuery<Card[], Error>({
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
      <CardList cards={data} />
      <Pagination pages={pages} />
      <ButtonBackToTop />
    </>
  );
};
