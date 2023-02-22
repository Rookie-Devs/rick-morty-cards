import { render, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { CardFront, CardFrontProps } from '../CardFront';
import '@testing-library/jest-dom';

const server = setupServer(
  rest.get<CardFrontProps>('/api/card', (req, res, ctx) => {
    return res(
      ctx.json({
        name: 'Rick Sanchez',
        url: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        id: 1,
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('CardFront', () => {
  it('should render the card front with name and image', async () => {
    const handleShowModal = jest.fn();
    render(
      <CardFront
        name="Rick Sanchez"
        url="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        id={1}
        handleShowModal={handleShowModal}
      />
    );
    const nameElement = await screen.findByText('Rick Sanchez');
    const imageElement = screen.getByAltText('Rick Sanchez');
    expect(nameElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });

  it('should call handleShowModal function when Details button is clicked', async () => {
    const handleShowModal = jest.fn();
    render(
      <CardFront
        name="Rick Sanchez"
        url="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        id={1}
        handleShowModal={handleShowModal}
      />
    );
    const buttonElement = await screen.findByText('Details');
    fireEvent.click(buttonElement);
    expect(handleShowModal).toHaveBeenCalled();
  });
});
