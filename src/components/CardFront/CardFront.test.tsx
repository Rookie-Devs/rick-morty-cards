import { render, screen } from '@testing-library/react';
import { CardFront, CardFrontProps } from './CardFront';

describe('CardFront', () => {
  it('should render the card', () => {
    const cardProps: CardFrontProps = {
      name: 'Rick Sanchez',
      url: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      id: 1,
      handleShowModal: () => {},
    };

    render(<CardFront {...cardProps} />);

    const card = screen.getByText('Rick Sanchez');
    expect(card).toBeInTheDocument();
  });
});
