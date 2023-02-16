import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Introduction = styled.h2`
  color: white;
  font-size: 2rem;
  text-align: center;
  margin-top: 30px;
`;

export const Profiles = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  @media (min-width: 300px) and (max-width: 470px) {
    flex-direction: column;
  }
`;

export const Button = styled(Link)`
  outline: none;
  border: none;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 8px;
  width: 180px;
  font-family: 'Urbanist', sans-serif;
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  margin: 30px auto;
  display: flex;
  text-align: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 25px ${({ theme }) => theme.colors.secondary};
  }
`;
