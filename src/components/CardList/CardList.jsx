import { CardFront, CardBack } from '../../components';
import './CardList.scss';

export const CardList = ({ data }) => {
  const renderUserCard = item => (
    <div className="card">
      <CardFront url={item.image} name={item.name} />
      <CardBack
        name={item.name}
        status={item.status}
        species={item.species}
        origin={item.origin.name}
        type={item.type}
        location={item.location.name}
        episodes={item.episode}
        gender={item.gender}
      />
    </div>
  );

  return (
    <div className="card-list" key={data.id}>
      {data.map(renderUserCard)}
    </div>
  );
};
