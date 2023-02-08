import { useState } from 'react';
import { CardFront, CardBack } from '../../components';

export const RenderCard = ({ item }) => {
  const [showBack, setShowBack] = useState(false);

  const handleShowModal = () => {
    setShowBack(true);
  };

  return (
    <>
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
    </>
  );
};
