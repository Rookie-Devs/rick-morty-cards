import React from "react";
import "../css/index.css";

function UserCard(itens) {
  const { url, name, status, species, origin } = itens;
  return (
    <div className="userCard">
      <img className="userCardImage" alt="Cards" src={url} />
      <div className="userCardTextContainer">
        <h3 className="userCardUsername">{name}</h3>
        <span className="userCardText">Status:</span>
        <span className="userCardTextValue">{status}</span>
        <span className="userCardText">Species:</span>
        <span className="userCardTextValue">{species}</span>
        <span className="userCardText">Origin:</span>
        <span className="userCardTextValue">{origin}</span>
      </div>
    </div>
  );
}

export default UserCard;
