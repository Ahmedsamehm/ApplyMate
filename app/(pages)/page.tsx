import React from "react";
import Hero from "./home/components/Hero";
import Features from "./home/components/Features";
import JobPlatforms from "./home/components/JobPlatforms";
import Pricing from "./home/components/Pricing";
import Footer from "./home/components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <JobPlatforms />
      <Pricing />
      <Footer />
    </>
  );
};

export default Home;
