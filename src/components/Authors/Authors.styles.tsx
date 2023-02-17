import styled from 'styled-components';

export const ProfileContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const Picture = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-bottom: 10px;
`;

export const Name = styled.h2`
  font-size: 1.5rem;
  color: white;
  text-align: center;
  margin-bottom: 15px;

  @media (min-width: 300px) and (max-width: 470px) {
    font-size: 1.3rem;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
