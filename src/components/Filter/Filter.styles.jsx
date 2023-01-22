import styled from 'styled-components';
import { Button } from '../FilterButton/FilterButton.styles';

export const Container = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const Value = styled.span`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3px;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};

  &:last-of-type {
    margin-top: 8px;
    margin-bottom: 3px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 8px;
  margin-bottom: 10px;
`;

export const FilterButton = styled(Button)`
  min-width: 60px;
  padding: 8px;
  margin-right: 4px;
  font-size: 1.1rem;

  &:hover {
    box-shadow: 1px 1px 25px ${props => props.theme.colors.secondary};
  }

  ${props => {
    switch (props.status) {
      case 'alive':
        return `
          color: ${props.theme.colors.secondary};
          background-color: ${props.theme.colors.primary};
        `;
      case 'dead':
        return `
          color: ${props.theme.colors.secondary};
          background-color: ${props.theme.colors.primary};
        `;
      case 'unknown':
        return `
          color: ${props.theme.colors.secondary};
          background-color: ${props.theme.colors.primary};
        `;
      default:
        return null;
    }
  }}

  ${props => {
    switch (props.gender) {
      case 'female':
        return `
          color: ${props.theme.colors.secondary};
          background-color: ${props.theme.colors.primary};
        `;
      case 'male':
        return `
          color: ${props.theme.colors.secondary};
          background-color: ${props.theme.colors.primary};
        `;
      case 'genderless':
        return `
          color: ${props.theme.colors.secondary};
          background-color: ${props.theme.colors.primary};
        `;
      case 'unknown':
        return `
          color: ${props.theme.colors.secondary};
          background-color: ${props.theme.colors.primary};
        `;
      default:
        return null;
    }
  }}
`;

// @media (max-width: 375px) {
//   .filter-container {
//     .span-filter {
//       font-size: 1.1rem;
//     }

//     .filter-button-container {
//       .filter-button {
//         font-size: 1rem;
//       }
//     }
//   }
// }
