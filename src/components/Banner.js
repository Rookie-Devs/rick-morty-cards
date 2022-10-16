import React from "react";

function Banner() {
  return (
    <div className="banner">
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
