import React from "react";
import "./Herosection.css";

function HeroSection() {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-text">
          <h1> Create and manage your supply chain ecosystem. </h1>

          <p>
            With Jumble's simple connect, order, invoice and pay process, you
            can create and manage your supply chain ecosystem with multiple
            partners on one account.
          </p>
        </div>
        <div className="hero-img">
          <img src="./images/arrow.svg" alt="her0-arrow" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
