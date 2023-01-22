import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import styled from 'styled-components';

export const Button = styled(ArrowUpCircleIcon)`
  width: 48px;
  color: ${props => props.theme.colors.secondary};
  align-self: center;
  position: fixed;
  bottom: 15px;
  right: 0;
  transition: all 1s;
`;
