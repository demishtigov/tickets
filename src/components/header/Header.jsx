import React from "react";
import "./header.css";
import logo from "../../assets/air-logo.png";

const Header = () => {
  return (
    
      <div className="container">
        <header className="header">
          <div className="header__logo">
            <img className="header__img" src={logo} alt="авиабилеты"></img>
          </div>
        </header>
      </div>
  
  );
};

export default Header;
