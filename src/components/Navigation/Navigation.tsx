import { Outlet } from 'react-router-dom';
import {
  Banner,
  Container,
  Button,
  Header,
  ButtonBanner,
  ApiButton,
} from './Navigation.styles';

export const Navigation = () => {
  const backToMiddle = () => {
    scrollTo({
      top: 650,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <Banner>
        <Container>
          <Button to="/" onClick={backToMiddle}>
            Home
          </Button>
          <Button to="/about" onClick={backToMiddle}>
            About
          </Button>
        </Container>
        <Header>
          This application uses the{' '}
          <span className="rick-morty">Rick and Morty API</span>
        </Header>
        <ButtonBanner>
          <ApiButton
            href="https://rickandmortyapi.com/"
            target="_blank"
            rel="noreferrer"
          >
            Check the API out
          </ApiButton>
        </ButtonBanner>
      </Banner>
      <Outlet />
    </>
  );
};
