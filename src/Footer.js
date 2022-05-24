import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-grid">
        <div className="grid">
          <img src="./images/logo.svg" alt="" />
          <h2>
            Create and manage your supply chain ecosystem with multiple partners
            on one account.
          </h2>
        </div>
        <div className="grid flexx">
          <h3 className="grid-head">Navigation</h3>
          <p> Benefits</p>
          <p> How it works</p>
          <p> Pricing</p>
        </div>

        <div className="grid flexx">
          <h3 className="grid-head">Navigation</h3>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
