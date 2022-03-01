import React from "react";
import logo from "./logo.svg";
import "reset-css";
import Navbar from "./components/NavbarSettings/Navbar";
import { navigation } from "./components/NavbarSettings/Navigation";
import Hero from "./components/HeroSettings/Hero";
import { linking } from "./components/HeroSettings/HeroLinks";

function App() {
  const { brand, links } = navigation;

  return (
    <div className="App">
      <Navbar brand={brand} links={links} />
      <Hero />
    </div>
  );
}

export default App;
