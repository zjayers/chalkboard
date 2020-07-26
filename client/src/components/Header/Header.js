import React from "react";
import "./Header.styles.scss";
import logo from "./logo512.png";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Chalkboard Logo" />
      <h1>Chalkboard</h1>
    </div>
  );
};

export default Header;
