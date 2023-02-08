import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import styled, { css } from 'styled-components';

export const Button = styled(ArrowUpCircleIcon)`
  width: 48px;
  color: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  bottom: 15px;
  right: 0;
  opacity: 0%;
  pointer-events: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  ${({ showButton }) =>
    showButton &&
    css`
      opacity: 100%;
      pointer-events: all;
    `}

  @media (min-width: 300px) and (max-width: 700px) {
    ${({ changePlace }) =>
      changePlace &&
      css`
        bottom: 100px;
      `}
  }
`;
