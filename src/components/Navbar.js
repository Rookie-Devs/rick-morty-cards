import React from "react";
import "../css/index.css";

function Navbar() {
  return (
    <ul className="navbar">
      <img src="https://assets.stickpng.com/images/58f37720a4fa116215a9240f.png" alt="Logo" className="logo"></img>
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
