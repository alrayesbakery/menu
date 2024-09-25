import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Al Rayes Bakery. All rights reserved.</p>
      <div className="social-links">
        {/* TODO: iza fi acc fb erjaa hetto  */}
        {/* <a
          href="https://www.instagram.com/alrayesbakery/"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a> */}
        <a
          href="https://www.instagram.com/alrayesbakery/"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="tel:+96103476693" aria-label="Phone">
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
