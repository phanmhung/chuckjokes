import React from "react";
import "./Footer.css";
import arrowRight from "../assets/assets_Homework_Front-End_01/path-copy-2@2x.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footerText">
          <h2>
            GOT JOKES? GET PAID
            <br />
            FOR SUBMITTING!
          </h2>
          <a href="submit-joke">
            SUBMIT JOKE <img src={arrowRight} alt="submit joke" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
