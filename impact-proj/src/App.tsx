import * as React from "react";
import Navbar from "./components/NavbarSettings/Navbar";
import { navigation } from "./components/NavbarSettings/Navigation";
import Body from "./Body";
import Footer from "./components/FooterSettings/Footer";
import "./App.css";

const App = () => {
  const { brand, links } = navigation;
  return (
    <div className="App">
      <Navbar brand={brand} links={links} />
      <Body />
      <Footer />
    </div>
  );
};
export default App;
