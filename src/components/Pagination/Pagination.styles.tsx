import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Paginate = styled(ReactPaginate)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 10vh;

  li {
    outline: none;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    padding: 8px;
    margin: 3px;
    display: inline-block;
    justify-content: space-around;
    text-align: center;
    font-family: 'Urbanist', sans-serif;
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
    min-width: 40px;
    cursor: pointer;

    @media (min-width: 300px) and (max-width: 500px) {
      margin: 4px;
    }

    a {
      display: block;
      min-width: 30px;
    }
  }
`;
