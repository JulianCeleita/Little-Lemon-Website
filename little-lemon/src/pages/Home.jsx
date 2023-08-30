import React from "react";
import { CallToAction } from "../components/CallToAction";
import { Chicago } from "../components/Chicago";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Testimonials } from "../components/Testimonials";
import HeroSection from "../components/HeroSection";
import {Specials} from "../components/Specials/Specials";

export const Home = () => {
  return (
    <section>
      <Nav />
      <HeroSection />
      <Specials/>
      <CallToAction />
      <Testimonials />
      <Chicago />
      <Footer />
    </section>
  );
};
