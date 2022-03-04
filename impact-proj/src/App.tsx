import * as React from "react";
import Navbar from "./components/NavbarSettings/Navbar";
import { navigation } from "./components/NavbarSettings/Navigation";
import Hero from "./components/HeroSettings/Hero";
import WhyUsFeature from "./components/WhyUsSettings/WhyUs";
import WhiteBg from "./components/WhiteBgSettings/WhiteBg";
import VideoSec from "./components/VideoSecSettings/VideoSec";
// import { Carousel } from "./components/CarouselSettings/Carousel";
// import Testimonial from "./components/CarouselSettings/TestimonialSettings/Testimonial";
import { BlogPost } from "./components/BlogPostSettings/BlogPost1";
import Footer from "./components/FooterSettings/Footer";
import "./App.css";
import { SliderContent } from "./components/CarouselSettings/Slider";
// import { New } from "./components/BlogPostSettings/New";

const App = () => {
  const { brand, links } = navigation;
  return (
    <div className="App">
      <Navbar brand={brand} links={links} />
      <Hero />
      <WhyUsFeature />
      <WhiteBg />
      <VideoSec />
      {/* <Carousel /> */}
      <SliderContent />
      {/* <Testimonial /> */}
      <BlogPost />
      <Footer />
      {/* <New /> */}
    </div>
  );
};
export default App;
