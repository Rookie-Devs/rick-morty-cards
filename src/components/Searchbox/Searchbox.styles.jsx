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
`;

// @media (max-width: 375px) {
//   .searchbox-container {
//     .label-search {
//       font-size: 1.1rem;
//     }
//     .input-search {
//       width: 190px;
//     }
//   }
// }

// @media (min-width: 376px) and (max-width: 768px) {
//   .searchbox-container {
//     .label-search {
//       font-size: 1.3rem;
//     }
//     .input-search {
//       width: 240px;
//     }
//   }
// }
