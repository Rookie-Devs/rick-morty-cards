import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import styled from 'styled-components';

export const Button = styled(ArrowUpCircleIcon)`
  width: 48px;
  color: ${({ theme }) => theme.colors.secondary};
  align-self: center;
  position: fixed;
  bottom: 15px;
  right: 0;
  transition: display 10s ease 1s;
  ${({ showButton }) => (showButton ? '' : 'display: none')}
`;
