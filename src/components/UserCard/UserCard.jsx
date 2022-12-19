import './UserCard.scss';

export const UserCard = (itens) => {
  const { url, name, status, species, origin, gender } = itens;
  return (
    <div className="userCard">
      <img className="userCardImage" alt="Cards" src={url} />
      <div className="userCardTextContainer">
        <h3
          className={`${
            name.length > 20 ? 'userCardUsernameCompact' : 'userCardUsername'
          }`}
        >
          {name}
        </h3>
        <div className="infoContainer">
          <span className="userCardText">Status</span>
          <span className="userCardTextValue">{status}</span>
          <span className="userCardText">Species</span>
          <span className="userCardTextValue">{species}</span>
          <span className="userCardText">Origin</span>
          <span className="userCardTextValue">{origin}</span>
          <span className="userCardText">Gender</span>
          <span className="userCardTextValue">{gender}</span>
        </div>
      </div>
    </div>
  );
};
