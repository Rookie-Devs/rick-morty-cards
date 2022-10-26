import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <div className="navbarContainer">
        <Link to="/" className="navbarButtons">
          Home
        </Link>
        <Link to="/about" className="navbarButtons">
          About
        </Link>
      </div>
      <h1 className="header">This application uses the Rick and Morty API</h1>
      <button className="buttonBanner">
        <a href="https://rickandmortyapi.com/" className="apiLink" target="_blank" rel="noreferrer">
          Check the API out
        </a>
      </button>
    </div>
  );
}

export default Banner;
