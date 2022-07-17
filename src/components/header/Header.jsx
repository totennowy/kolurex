import React from "react";
import HeaderContact from "./HeaderContact";
import HeaderSearch from "./HeaderSearch";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header>
        <HeaderContact />
        <HeaderSearch />
        <HeaderNav />
    </header>
  );
};

export default Header;
