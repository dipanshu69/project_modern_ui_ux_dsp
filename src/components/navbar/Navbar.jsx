import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/GPT-3.png";
import logo1 from "../../assets/Home.png";
import logo2 from "../../assets/What is GPT_.png";
import logo3 from "../../assets/Open AI.png";
import logo4 from "../../assets/Case Studies.png";


const Navbar = () => {
  return (
    <div className="dsp3__navbar">
      <div className="dsp3__navbar-links">
        <div className="dsp3__navbar-links_logo">
          <img src={logo} alt="logo" />
          <img src={logo1} alt="logo1" />
          <img src={logo2} alt="logo2" />
          <img src={logo3} alt="logo3" />
          <img src={logo4} alt="logo4" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
