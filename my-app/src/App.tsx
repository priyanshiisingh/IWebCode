import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "reset-css";
import Navbar from "./components/NavbarSettings/Navbar";
import { navigation } from "./components/NavbarSettings/Navigation";

function App() {
  const { brand, links } = navigation;
  return (
    <div className="App">
      <Navbar brand={brand} links={links} />
    </div>
  );
}

export default App;
