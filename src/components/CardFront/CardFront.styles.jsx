import styled from 'styled-components';
import { Button } from '../FilterButton/FilterButton.styles';

export const CardFrontContainer = styled.div`
  border-radius: 12px;
  min-height: 280px;
  width: 600px;
  overflow: hidden;
  display: flex;
  text-align: center;
  background: rgb(60, 62, 68);

  &:hover {
    box-shadow: 1px 1px 25px $primary-color;
  }
`;

export const Image = styled.img`
  min-width: 50%;
  min-height: 80%;
  border-radius: 2px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
export const Name = styled.h3`
  margin: 0 auto;
  padding-top: 2px;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => (props.name.length > 20 ? '1.2rem' : '1.5rem')};
  text-align: center;
  align-self: center;
  margin-bottom: 40px;
`;

export const CardButton = styled(Button)`
  min-width: 80px;
  padding: 0.5em 0.2em;
  font-size: 1.2rem;
`;
