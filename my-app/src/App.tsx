import React from "react";
import logo from "./logo.svg";
import "reset-css";
import Navbar from "./components/NavbarSettings/Navbar";
import { navigation } from "./components/NavbarSettings/Navigation";
import Hero from "./components/HeroSettings/Hero";
import { linking } from "./components/HeroSettings/HeroLinks";

import WhyUs from "./components/WhyUsSettings/WhyUs";
import { Links } from "./components/WhyUsSettings/WhyUsLinking";

function App() {
  const { brand, links } = navigation;
  const { contents } = Links;

  return (
    <div className="App">
      <Navbar brand={brand} links={links} />
      <Hero />
      <WhyUs contents={contents} />
    </div>
  );
}

export default App;
