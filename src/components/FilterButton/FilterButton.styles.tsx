import styled from 'styled-components';

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-family: 'Urbanist', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  min-width: 7%;
  padding: 10px;
  font-size: 1.3rem;
  margin-left: 10px;

  &:hover {
    box-shadow: 1px 1px 25px ${({ theme }) => theme.colors.secondary};
  }
`;
