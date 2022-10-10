import React from "react";
import UserCard from "./UserCard";

function renderUserCardFunction({ setData, currentItens }) {
  const renderUserCard = (setData) => <UserCard url={setData.image} name={setData.name} status={setData.status} species={setData.species} origin={setData.origin.name} key={setData.id} />;
  return <div className="app">{currentItens.map(renderUserCard)}</div>;
}

export default renderUserCardFunction;
