import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const HeaderContact = () => {
  return (
    <div className="Header_contact">
      <div className="container">
        <p className="header_contact_section">
          <BsFillTelephoneFill /> Telefon / <FaFax /> Fax +48 17 519 11 06 -
          centrala, fakturowanie
        </p>
        <p>
          Napisz do Nas <FaEnvelope /> biuro@kolurex.pl
        </p>
      </div>
    </div>
  );
};

export default HeaderContact;
