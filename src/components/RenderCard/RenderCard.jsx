import { useState } from 'react';
import { CardFront, CardBack } from '../../components';
import { Card } from './RenderCard.styles';

export const RenderCard = ({ item }) => {
  const [showBack, setShowBack] = useState(false);

  const handleShowModal = () => {
    setShowBack(true);
  };

  return (
    <Card>
      <CardFront
        url={item.image}
        name={item.name}
        id={item.id}
        handleShowModal={handleShowModal}
      />
      <CardBack
        name={item.name}
        id={item.id}
        status={item.status}
        species={item.species}
        origin={item.origin.name}
        type={item.type}
        location={item.location.name}
        episodes={item.episode}
        gender={item.gender}
        showBack={showBack}
        setShowBack={setShowBack}
      />
    </Card>
  );
};
