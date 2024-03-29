import styled from 'styled-components';
import { css } from 'styled-components';
import { Button } from '../FilterButton/FilterButton.styles';

type FilterButtonProps = {
  isActive?: boolean;
};

export const Container = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  @media (min-width: 300px) and (max-width: 600px) {
    margin-left: 0px;
  }
`;

export const Value = styled.span`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};

  &:last-of-type {
    margin-top: 8px;
    margin-bottom: 3px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 8px;
  margin-bottom: 10px;
`;

export const FilterButton = styled(Button)<FilterButtonProps>`
  min-width: 60px;
  padding: 8px;
  margin-right: 4px;
  font-size: 1.1rem;

  &:hover {
    box-shadow: 1px 1px 25px ${({ theme }) => theme.colors.secondary};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
      background-color: ${({ theme }) => theme.colors.primary};
    `}

  @media (min-width: 300px) and (max-width: 600px) {
    margin: 8px;
  }
`;
