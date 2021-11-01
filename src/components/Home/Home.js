import React from "react";
import About from "../About/About";
import Testimonial from "../News/Testimonial";
import Service from "../Service/Service";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <About />
      <Testimonial />
    </div>
  );
};

export default Home;
