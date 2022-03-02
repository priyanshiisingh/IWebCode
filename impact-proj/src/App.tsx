import * as React from "react";
import Navbar from "./components/NavbarSettings/Navbar";
import { navigation } from "./components/NavbarSettings/Navigation";
import Hero from "./components/HeroSettings/Hero";
import WhyUsFeature from "./components/WhyUsSettings/WhyUs";
import WhiteBg from "./components/WhiteBgSettings/WhiteBg";
import VideoSec from "./components/VideoSecSettings/VideoSec";

const App = () => {
  const { brand, links } = navigation;
  return (
    <div className="App">
      <Navbar brand={brand} links={links} />
      <Hero />
      <WhyUsFeature />
      <WhiteBg />
      <VideoSec />
    </div>
  );
};
export default App;
