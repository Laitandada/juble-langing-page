import React from "react";
import Benefits from "./Benefits";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Pricing from "./Pricing";
import Works from "./Works";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Benefits />
      <Works />
      <Pricing />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
