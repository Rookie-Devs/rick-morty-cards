import styled from 'styled-components';
import { Button } from '../FilterButton/FilterButton.styles';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const Cardback = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  min-height: 280px;
  width: 600px;
  text-align: center;
  display: flex;
  text-align: center;
  background: rgb(60, 62, 68);

  @media (max-width: 400px) {
    width: 360px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    width: 410px;
  }

  @media (min-width: 500px) and (max-width: 700px) {
    width: 500px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Name = styled.h3`
  margin: 0;
  padding-top: 2px;
  color: ${({ theme }) => theme.colors.primary};
  padding-top: 20px;
  padding-bottom: 10px;
  font-size: ${({ name }) => (name.length > 20 ? '1.2rem' : '1.5rem')};
  text-align: center;
`;

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 170px;

  @media (min-width: 300px) and (max-width: 500px) {
    flex-direction: column;
  }

  /* @media (min-width: 500px) and (max-width: 700px) {
    width: 500px;
  } */
`;

export const Block = styled.div`
  margin: 0 auto;
  padding: 8px;
  max-width: 200px;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  font-size: 1.1rem;
`;

export const Value = styled.span`
  color: white;
  font-size: 1rem;
  margin-left: 6px;
`;

export const ModalButton = styled(Button)`
  padding: 8px;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 12px auto;
  font-size: 1.2rem;
`;
