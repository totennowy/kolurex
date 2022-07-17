import React from "react";
import { BiSearch } from "react-icons/bi";
import logo from "../../assets/logo.png";

const HeaderSearch = () => {
  return (
    <div className="Header_search container">

      <img src={logo} alt="site logo"></img>

      <p>dla Ciebie i Twojego domu</p>

      <form class="search-field" action="">
        <input type="text" placeholder="Wpisz szukaną frazę" name="search" />
        <button type="submit">
          <BiSearch />
        </button>
      </form>
    </div>
  );
};
export default HeaderSearch;
