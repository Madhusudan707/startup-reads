import React from "react";
import Brand from "./Brand/Brand";
import Navbar from "./Navbar/Navbar";
import Hamburger from "./Hamburger/Hamburger";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <Hamburger />
      <Brand />
      <Navbar />
    </div>
  );
};

export default Header;
