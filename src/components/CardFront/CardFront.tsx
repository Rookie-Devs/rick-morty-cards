import {
  CardFrontContainer,
  Image,
  Container,
  Name,
  CardButton,
} from './CardFront.styles';

export type CardFrontProps = {
  name: string;
  url: string;
  id: number;
  handleShowModal: React.MouseEventHandler<HTMLButtonElement>;
};

export const CardFront = ({
  name,
  url,
  id,
  handleShowModal,
}: CardFrontProps) => {
  return (
    <CardFrontContainer key={id}>
      <Image alt={name} src={url} />
      <Container>
        <Name name={name}>{name}</Name>
        <CardButton onClick={handleShowModal}>Details</CardButton>
      </Container>
    </CardFrontContainer>
  );
};
