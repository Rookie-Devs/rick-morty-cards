import React from "react";
import "../css/index.css";

function Navbar() {
  return (
    <ul className="navbar">
      <img src="https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2021/04/Logo-Rick-and-Morty-PNG.png" alt="Logo" className="logo"></img>
      <li className="items about">
        <a href="a" className="link">
          About
        </a>
      </li>
      <li className="items support">
        <a href="a" className="link">
          Support here
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
