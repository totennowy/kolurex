import React from "react";
import ceraty from "../../assets/category/ceraty.png";
import chodniki from "../../assets/category/chodniki.png";
import deska from "../../assets/category/deska.png";
import dywanowe from "../../assets/category/dywanowe.png";
import farby from "../../assets/category/farby.png";
import lvt from "../../assets/category/lvt.png";
import pcv from "../../assets/category/pcv.png";
import wycieraczki from "../../assets/category/wycieraczki.png";

const Categories = () => {
  return (
    <section className="container category">
      <h2>OFERTA</h2>
      <div className="categories_box">

        <a href="#">
          <div className="category_card">
            <img src={pcv} alt="wykładziny pcv" />
            <div className="category_textbox">WYKŁADZINY PCV</div>
          </div>
        </a>

        <a href="#">
          <div className="category_card">
            <img src={lvt} alt="luxury vinyl tiles" />
            <div className="category_textbox">LVT - LUXURY VINYL TILES</div>
          </div>
        </a>

        <a href="#">
          <div className="category_card">
            <img src={ceraty} alt="ceraty" />
            <div className="category_textbox">CERATY</div>
          </div>
        </a>

        <a href="#">
          <div className="category_card">
            <img src={chodniki} alt="chodniki" />
            <div className="category_textbox">CHODNIKI</div>
          </div>
        </a>

        <a href="#">
          <div className="category_card">
            <img src={dywanowe} alt="wykładziny dywanowe" />
            <div className="category_textbox">WYKŁADZINY DYWANOWE</div>
          </div>
        </a>

        <a href="#">
          <div className="category_card">
            <img src={wycieraczki} alt="wycieraczki" />
            <div className="category_textbox">WYCIERACZKI</div>
          </div>
        </a>

        <a href="#">
          <div className="category_card">
            <img src={deska} alt="deska" />
            <div className="category_textbox">DESKA KOMPOZYTOWA</div>
          </div>
        </a>

        <a href="#">
          <div className="category_card">
            <img src={farby} alt="farby" />
            <div className="category_textbox">FARBY</div>
          </div>
        </a>
        
      </div>
    </section>
  );
};

export default Categories;
