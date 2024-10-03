import React from "react";
import "./index.css";
import logo from "../../assets/al-rayes-logo1.jpg";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="Al Rayes Bakery" className="logo" />
    </header>
  );
};

export default Header;
