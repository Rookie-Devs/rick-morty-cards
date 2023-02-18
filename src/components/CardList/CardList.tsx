import { RenderCard } from '../../components';
import { Container } from './CardList.styles';
import { Card } from '../../routes/Home/Home';

type CardListProps = {
  cards: Card[];
};

export const CardList = ({ cards }: CardListProps) => {
  return (
    <Container>
      {cards.map(item => (
        <RenderCard item={item} key={item.id} />
      ))}
    </Container>
  );
};
