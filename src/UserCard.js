import './UserCard.css';

function UserCard(props) {
  return (
    <div className='user-card'>
      <img className='user-card-image' src={props.url} />
      <h3 className='user-card-username'>{props.name}</h3>
    </div>
  );
}

export default UserCard;
