import React from "react";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const HeaderNav = () => {
  return (
    <nav className="container">
       <button class="hamburger" id="hamburger">
          <GiHamburgerMenu />
        </button>
        <ul className="nav-ul" id="nav-ul">
          <li><a href="#"> <FaHome /> </a></li>
          <li><a href="#"> O FIRMIE </a></li>
          <li><a href="#"> OFERTA </a></li>
          <li><a href="#"> STREFA PROFI </a></li>
          <li><a href="#"> DOSTAWCY </a></li>
          <li><a href="#"> ODBIORCY </a></li>
          <li><a href="#"> KATALOG ONLINE </a></li>
          <li><a href="#"> DO POBRANIA </a></li>
          <li><a href="#"> KONTAKT </a></li>
          <li><a href="#"> PROMOCJE </a></li>
          <li><a href="#"> RODO </a></li>
        </ul>
    </nav>
  );
};

export default HeaderNav;
