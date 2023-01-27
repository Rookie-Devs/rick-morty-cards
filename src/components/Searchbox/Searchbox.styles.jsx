import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const Search = styled.label`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 10px;
  font-weight: bold;
`;

export const Input = styled.input`
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-family: 'Urbanist', sans-serif;
  font-size: 1rem;
  width: 300px;
  outline: none;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    box-shadow: 1px 1px 25px ${({ theme }) => theme.colors.secondary};
  }

  @media (min-width: 300px) and (max-width: 500px) {
    width: 160px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    width: 200px;
  }
`;
