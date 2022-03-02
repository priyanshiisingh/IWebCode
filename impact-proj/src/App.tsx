import * as React from "react";
import Navbar from "./components/NavbarSettings/Navbar";
import { navigation } from "./components/NavbarSettings/Navigation";
import Hero from "./components/HeroSettings/Hero";
import WhyUsFeature from "./components/WhyUsSettings/WhyUs";

const App = () => {
  const { brand, links } = navigation;
  return (
    <div className="App">
      <Navbar brand={brand} links={links} />
      <Hero />
      <WhyUsFeature />
    </div>
  );
};
export default App;
