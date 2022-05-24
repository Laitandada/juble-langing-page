import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img src="./images/logo.svg" alt="logo-img" />
        </div>
        <div className="nav-links">
          <a href="#benefits">Benefits</a>
          <a href="#works">How it Works</a>
          <a href="#pricing">Pricing</a>
          <button className="btn">Get Started</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
