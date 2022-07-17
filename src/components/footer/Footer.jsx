import React from "react";
import { FiMapPin } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer_short">
        <p className="footer_title">NA SKRÓTY</p>
        <ul>
          <li>
            <a href="#">O firmie</a>
          </li>
          <li>
            <a href="#">O Strefa Profi</a>
          </li>
          <li>
            <a href="#">Dostawcy</a>
          </li>
          <li>
            <a href="#">Odbiorcy</a>
          </li>
          <li>
            <a href="#">Katalog online</a>
          </li>
          <li>
            <a href="#">Do pobrania</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
          <li>
            <a href="#">Promocje</a>
          </li>
          <li>
            <a href="#">RODO</a>
          </li>
        </ul>
      </div>

      <div className="footer_offer">
        <p className="footer_title">OFERTA</p>
        <ul>
          <li>
            <a href="#">Wykładziny PCV</a>
          </li>

          <li>
            <a href="#">LVT – luxury vinyl tiles</a>
          </li>

          <li>
            <a href="#">Ceraty</a>
          </li>

          <li>
            <a href="#">Chodniki</a>
          </li>

          <li>
            <a href="#">Wykladziny dywanowe</a>
          </li>

          <li>
            <a href="#">Wycieraczki</a>
          </li>

          <li>
            <a href="#">Deska kompozytowa</a>
          </li>

          <li>
            <a href="#">Farby</a>
          </li>

          <li>
            <a href="#">Pozostale produkty</a>
          </li>
        </ul>
      </div>

      <div className="footer_profi">
        <p className="footer_title">STREFA PROFI</p>
        <ul>
          <li>
            <a href="#">
              Farby wewnętrze zewnętrzne / tynki zewnętrzne cienkowarstwowe
            </a>
          </li>
          <li>
            <a href="#">Wykładziny obiektowe dywanowe</a>
          </li>
          <li>
            <a href="#">Wykładziny obiektowe PCV</a>
          </li>
          <li>
            <a href="#">Wykładziny sportowe</a>
          </li>
          <li>
            <a href="#">Pozostałe</a>
          </li>
        </ul>
      </div>

      <div className="footer_box">
        <p className="footer_box_title">Firma Handlowa Kolurex Sp. z o.o.</p>
        <div className="footer_box_address">
          <p>
            <FiMapPin />
          </p>
          <p>
            Adres kontaktowy
            <br />
            35–304 Rzeszów,
            <br />
            ul. Generała Władysława Sikorskiego 447
          </p>
        </div>

        <div>
          <p>
            <BsFillTelephoneFill /> +48 17 519 11 06
          </p>
          <p>
            <FaFax /> +48 17 519 11 06
          </p>
          <p>
            <FaEnvelope /> biuro@kolurex.pl
          </p>
        </div>
        <div>
          <p>
            Nasze biuro jest czynne od poniedziałku do piątku w godzinach od
            7:00 do 16:00.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
