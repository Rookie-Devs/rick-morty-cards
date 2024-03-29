import styled from 'styled-components';

export const SearchFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Loading = styled.div`
  height: max-content;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Error = styled(Loading)``;
