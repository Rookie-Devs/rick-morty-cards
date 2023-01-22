import { RenderCard } from '../../components';
import { Container } from './CardList.styles.jsx';

export const CardList = ({ data }) => {
  return (
    <Container>
      {data.map(item => (
        <RenderCard item={item} key={item.id} />
      ))}
    </Container>
  );
};
