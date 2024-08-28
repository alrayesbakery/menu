import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Al Rayes Bakery. All rights reserved.</p>
      <div className="social-links">
        <a href="#" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="tel:+1234567890" aria-label="Phone">
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
