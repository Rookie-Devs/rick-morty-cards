import styled from 'styled-components';

export const SearchFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Loading = styled.div`
  height: 10vh;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`;

export const Error = styled(Loading)``;
