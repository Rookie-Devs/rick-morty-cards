import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from '../../assets/background.jpg';

export const Banner = styled.section`
  height: 100vh;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
`;

export const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  text-align: center;
`;

export const Button = styled(Link)`
  outline: none;
  border: none;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 8px;
  margin-top: 0;
  margin-right: 20px;
  width: 100%;
  font-family: 'Urbanist', sans-serif;
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 25px ${({ theme }) => theme.colors.secondary};
  }
`;

export const Header = styled.h1`
  font-size: 3rem;
  color: white;
`;

export const ButtonBanner = styled.button`
  border: none;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  margin-top: 15px;
  min-width: 100px;
  font-family: 'Urbanist', sans-serif;
  font-weight: bold;
  outline: none;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 25px ${({ theme }) => theme.colors.secondary};
  }
`;

export const ApiButton = styled.a`
  outline: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Urbanist', sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
`;

// @media (max-width: 375px) {
//   .banner {
//     .navbar-container {
//       .navbar-buttons {
//         padding: 6px;
//         font-size: 1.4rem;
//       }
//     }
//     .header {
//       font-size: 2rem;
//     }
//     .button-banner {
//       padding: 10px;
//       .api-button {
//         font-size: 1.4rem;
//       }
//     }
//   }
// }

// @media (min-width: 376px) and (max-width: 768px) {
//   .banner {
//     .navbar-container {
//       .nnavbar-buttons {
//         padding: 6px;
//       }
//     }
//     .header {
//       font-size: 2.5rem;
//     }
//     .button-banner {
//       padding: 10px;
//       .api-button {
//         font-size: 1.6rem;
//       }
//     }
//   }
// }
