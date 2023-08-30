import React from "react";
import { About } from "../components/About/About";
import { Footer } from "../components/Footer/Footer";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { Nav } from "../components/Nav/Nav";
import { Specials } from "../components/Specials/Specials";
import { Testimonials } from "../components/Testimonials/Testimonials";

export const Home = () => {
  return (
    <section>
      <Nav />
      <HeroSection />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </section>
  );
};
