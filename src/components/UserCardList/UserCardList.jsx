import { UserCard } from '../UserCard/UserCard';
import './UserCardList.scss';

const renderUserCard = (item) => (
  <UserCard
    url={item.image}
    name={item.name}
    status={item.status}
    species={item.species}
    origin={item.origin.name}
    gender={item.gender}
    key={item.id}
  />
);

export const UserCardList = ({ data = [] }) => (
  <div className="userCardList">{data.map(renderUserCard)}</div>
);
