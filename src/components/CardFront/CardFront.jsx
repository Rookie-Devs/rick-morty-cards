import {
  CardFrontContainer,
  Image,
  Container,
  Name,
  CardButton,
} from './CardFront.styles.jsx';

export const CardFront = ({ name, url, id, handleShowModal }) => {
  return (
    <CardFrontContainer key={id}>
      <Image alt="Cards" src={url} />
      <Container>
        <Name name={name}>{name}</Name>
        <CardButton onClick={handleShowModal}>Details</CardButton>
      </Container>
    </CardFrontContainer>
  );
};
