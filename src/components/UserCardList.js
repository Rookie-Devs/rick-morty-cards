import React from "react";
import UserCard from "./UserCard";

const renderUserCard = (item) => <UserCard url={item.image} name={item.name} status={item.status} species={item.species} origin={item.origin.name} gender={item.gender} key={item.id} />;

const UserCardList = ({ data }) => <div className="app">{data.map(renderUserCard)}</div>;

export default UserCardList;
